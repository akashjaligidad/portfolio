import re

def check_tags(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex for opening tags and closing tags
    # This one doesn't match attributes, just the tag name
    # We'll use a more robust regex for finditer
    
    stack = []
    lines = content.split('\n')
    
    for i, line in enumerate(lines, 1):
        # Find all tags in this line
        # Use finditer to handle multiple tags per line
        for match in re.finditer(r'<(div|section|main|footer|motion\.div|h1|h2|h3|p|ul|li|a|form|label|input|textarea|button|span|Navbar|AnimatePresence)|</(div|section|main|footer|motion\.div|h1|h2|h3|p|ul|li|a|form|label|input|textarea|button|span|Navbar|AnimatePresence)>', line):
            full_match = match.group(0)
            if full_match.startswith('</'):
                tag_name = match.group(2)
                if not stack:
                    print(f"Error: Found closing tag </{tag_name}> at line {i} with no matching opening tag.")
                else:
                    top_name, top_line = stack.pop()
                    if top_name != tag_name:
                        print(f"Error: Tag mismatch. Found </{tag_name}> at line {i}, but expected </{top_name}> (opened at line {top_line}).")
            else:
                tag_name = match.group(1)
                # Check if it's self-closing
                # Look for /> before the end of the tag
                # We need to find the actual end of this tag in the content
                tag_end_index = content.find('>', match.start())
                tag_content = content[match.start():tag_end_index+1]
                if tag_content.endswith('/>'):
                    continue
                stack.append((tag_name, i))

    if stack:
        print(f"Error: {len(stack)} unclosed tags found:")
        for name, line in reversed(stack):
            print(f"  <{name}> at line {line}")
    else:
        print("All tags balanced!")

check_tags('src/App.tsx')
