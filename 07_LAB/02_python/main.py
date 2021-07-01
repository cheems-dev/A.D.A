# To add a new cell, type '# %%'
# To add a new markdown cell, type '# %% [markdown]'
# %%
def fibonacci_recursivo(n):
    if n <= 1:
        return n;
    return fibonacci_recursivo(n - 1) + fibonacci_recursivo(n - 2)


# %%
print("i\tfib(i)")
for i in range(10):
    print(i, "\t",fibonacci_recursivo(i))


# %%
def fibonacci_iterativo(n):
    n_1 = 1
    n_2 = 0
    if n < 1:
        return 0;
    for _ in range(2,n):
        add = n_1 + n_2
        n_2 = n_1
        n_1 = add
    return n_1


# %%
print("fib(",2**20,"):",fibonacci_iterativo(2**20))


# %%



