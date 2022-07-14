mat = """
    7i3
    Tsi
    h%x
    i #
    sM 
    $a 
    #t%
    ^r!
"""
mat_modified = mat.split('   ')
print(mat_modified)

for idx, word in enumerate(mat_modified):
    mat_modified[idx] = word.strip('\n')
print(mat_modified)

del mat_modified[0]
del mat_modified[-1]
print(mat_modified)

mat_modified = [list(chars) for chars in mat_modified]
print(mat_modified)

res = list(zip(mat_modified))
print(res)
