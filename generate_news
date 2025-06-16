import openai
from datetime import datetime

openai.api_key = "YOUR_OPENAI_API_KEY"  # Use GitHub secret in CI

today = datetime.now().strftime("%B %d, %Y")

prompt = "Write a concise, objective international news summary for today."

response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a professional international news editor."},
        {"role": "user", "content": prompt}
    ]
)

news = response['choices'][0]['message']['content']

# Inject into index.html directly
with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

start_marker = "<div id=\"news\">"
end_marker = "</div>"
pre, post = content.split(start_marker)
post = post.split(end_marker)[1]

new_content = f"{start_marker}\n<h2>{today}</h2>\n<p>{news}</p>\n{end_marker}"

with open("index.html", "w", encoding="utf-8") as f:
    f.write(pre + new_content + post)
