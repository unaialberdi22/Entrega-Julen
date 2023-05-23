const initialState = {
    initPositions: [
      [],
      [],
      [],
    ],
    checkboxes: {},
    newPositions: [],
    linePositions: [],
  };
  
  const [state, setState] = useState(initialState);
  
  useEffect(() => {
    const arrayLength = state.initPositions.length;
    // ... rest of your code
  
  }, [state.initPositions]);
  
  // Later, when you want to update the initPositions array:
  const newInitPositions = [  ...initialState.initPositions,  [1, 2, 3],
  ];
  const updatedState = {
    ...initialState,
    initPositions: newInitPositions,
  };
  setState(updatedState);