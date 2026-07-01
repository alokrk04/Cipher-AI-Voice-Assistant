import streamlit as st
from config import get_bedrock_client, get_dynamodb_client
from agent import agent_response

st.set_page_config(page_title="AI Support Agent")

st.title("AI Customer Support Agent (AWS Bedrock)")

access_key = st.text_input("AWS Access Key")
secret_key = st.text_input("AWS Secret Key", type="password")

if access_key and secret_key:

    bedrock = get_bedrock_client(access_key, secret_key)
    dynamodb = get_dynamodb_client(access_key, secret_key)

    table = dynamodb.Table("chat_memory")

    if "messages" not in st.session_state:
        st.session_state.messages = []

    user_input = st.text_input("Ask your question:")

    if st.button("Send"):
        if user_input:
            response = agent_response(bedrock, user_input)

            st.session_state.messages.append(("You", user_input))
            st.session_state.messages.append(("Agent", response))

    for role, msg in st.session_state.messages:
        st.write(f"{role}: {msg}")
