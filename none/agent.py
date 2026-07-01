import json
from tools import create_ticket, get_faq_answer

# ✅ Llama model
MODEL_ID = "meta.llama3-8b-instruct-v1:0"


def invoke_bedrock(client, prompt):
    body = json.dumps({
        "prompt": prompt,
        "max_gen_len": 300,
        "temperature": 0.5
    })

    try:
        response = client.invoke_model(
            modelId=MODEL_ID,
            body=body
        )

        result = json.loads(response['body'].read())

        # ✅ Handle multiple formats
        if "generation" in result:
            return result["generation"]

        elif "outputs" in result:
            return result["outputs"][0]["text"]

        else:
            return "⚠️ Unexpected response format"

    except Exception as e:
        return f"❌ Error: {str(e)}"


def agent_response(client, user_input):
    
    # ✅ Step 1: FAQ shortcut
    faq = get_faq_answer(user_input)
    if faq:
        return faq

    # ✅ Step 2: Decision making
    decision_prompt = f"""
You are a customer support AI agent.

User Query: {user_input}

Rules:
- If user reports a problem → respond ONLY with CREATE_TICKET
- Otherwise → respond normally

Response:
"""

    decision = invoke_bedrock(client, decision_prompt)

    if decision and "CREATE_TICKET" in decision:
        return create_ticket(user_input)

    # ✅ Step 3: Final response
    final_response = invoke_bedrock(client, user_input)

    if not final_response or final_response.strip() == "":
        return "⚠️ No response generated"

    return final_response