```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, including the initial render
    console.log('Effect runs!');
    return () => {
      // Cleanup function (optional): runs before the next effect or when the component unmounts
      console.log('Cleanup function runs!');
    };
  }, []); // Empty dependency array: the effect runs only once after the initial render

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```