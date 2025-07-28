# clean_file.py
file_path = "app/api/v1/endpoints/chat.py"

with open(file_path, "rb") as f:
    content = f.read()

cleaned_content = content.replace(b'\x00', b'')

with open(file_path, "wb") as f:
    f.write(cleaned_content)

print("✅ File cleaned!")
