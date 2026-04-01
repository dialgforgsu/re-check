import re, pathlib, subprocess, sys
p = pathlib.Path('index.html')
text = p.read_text(encoding='utf-8')
m = re.search(r'<script>(.*)</script>', text, re.S)
if not m:
    print('NO_SCRIPT')
    sys.exit(1)
code = m.group(1)
pathlib.Path('tmp_script.js').write_text(code, encoding='utf-8')
proc = subprocess.run(['node', '--check', 'tmp_script.js'], capture_output=True, text=True)
print('returncode', proc.returncode)
print(proc.stdout)
print(proc.stderr)
