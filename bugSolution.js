```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let mounted = true; // Add a mounted flag
    console.log('Effect runs!');
    return () => {
      mounted = false; // Set mounted to false before cleanup
      console.log('Cleanup function runs!');
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```