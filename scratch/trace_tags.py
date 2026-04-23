import re

def check_tags(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all opening and closing tags for div, section, main, footer
    tags = re.findall(r'<(div|section|main|footer|motion\.div)|</(div|section|main|footer|motion\.div)>', content)
    
    stack = []
    line_counts = content.split('\n')
    
    # Re-parse to get line numbers
    all_tags = []
    for line_num, line in enumerate(line_counts, 1):
        # Match opening tags
        for match in re.finditer(r'<(div|section|main|footer|motion\.div)', line):
            # Check if self-closing
            # Naive check: search for /> before the next >
            rest = line[match.end():]
            end_of_tag = rest.find('>')
            if end_of_tag != -1:
                if rest[:end_of_tag+1].strip().endswith('/>'):
                    continue
            all_tags.append(('open', match.group(1), line_num))
            
        # Match closing tags
        for match in re.finditer(r'</(div|section|main|footer|motion\.div)>', line):
            all_tags.append(('close', match.group(2), line_num))

    for type, name, line in all_tags:
        if type == 'open':
            stack.append((name, line))
        else:
            if not stack:
                print(f"Error: Found closing tag </{name}> at line {line} with no matching opening tag.")
            else:
                top_name, top_line = stack.pop()
                if top_name != name:
                    print(f"Error: Tag mismatch. Found </{name}> at line {line}, but expected </{top_name}> (opened at line {top_line}).")
    
    if stack:
        print(f"Error: {len(stack)} unclosed tags found:")
        for name, line in stack:
            print(f"  <{name}> at line {line}")
    else:
        print("All tags balanced!")

check_tags('src/App.tsx')
