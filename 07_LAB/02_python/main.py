# To add a new cell, type '# %%'
# To add a new markdown cell, type '# %% [markdown]'
# %%
def fibonacci_recursivo(n):
    if n <= 1:
        return n
    return fibonacci_recursivo(n - 1) + fibonacci_recursivo(n - 2)


# %%
# print("i\tfib(i)")
# for i in range(10):
#     print(i, "\t", fibonacci_recursivo(i))


# %%
def fibonacci_iterativo(n):
    memoizacion = []
    memoizacion.append(0)
    memoizacion.append(1)
    if n < 1:
        return 0
    for _ in range(1, n):
        memoizacion.append(memoizacion[-2] + memoizacion[-1])

    return memoizacion[-1]


# %%
print("fib(", 2**20, "):", fibonacci_iterativo(2**20))


# %%
# for i in range(2**20):
#     print("fib(", i, "):", fibonacci_iterativo(i))


# %%
