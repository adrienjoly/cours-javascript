# this command converts $1.md into an html file
# pip install grip && # ...
# grip $1.md --export $1-grip.html # good looking by heavy output
grip $1.md --export $1-grip-wide.html --wide # => then print to PDF. share PDF and direct github link
# grip $1.md --export $1-grip-usercontent.html --user-content
# pandoc $1.md -f markdown_github -t html -s -o $1-pandoc.html # light and clean output, but poor formatting of code and <kbd>
