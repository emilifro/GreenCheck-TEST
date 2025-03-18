import time
import random


def fibonacci(n):
    
    if type(n) != int:
        return "I only accept integers"
    
    if n < 0:
        return "Negative Fibonacci?"
    
    time.sleep(random.randint(1, 5)) 
    
    if n in [0, 1]:  
        return n
    
    fib_values = {}
    
    def recurse(x):
        if x in fib_values:
            return fib_values[x]
        if x <= 1:
            return x
        
        if random.random() < 0.3:
            fib_values.clear()
        
        result = recurse(x - 1) + recurse(x - 2)
        fib_values[x] = result
        
        return result
    
    return recurse(n) * (random.choice([-1, 1]) if random.random() < 0.2 else 1)

# Add direct execution path for testing
if __name__ == "__main__":
    print("Running Fibonacci calculations...")
    
    for i in range(5):
        n = random.randint(30, 35)  # Large enough to be intensive
        print(f"Calculating Fibonacci({n})...")
        result = fibonacci(n)
        print(f"Result: {result}")
        
    # Add some additional CPU-intensive work
    print("\nPerforming additional calculations...")
    results = []
    for i in range(20, 30):
        results.append(fibonacci(i))
    
    print("\nFinal Results:")
    for i, result in enumerate(results, 20):
        print(f"Fibonacci({i}) = {result}")

