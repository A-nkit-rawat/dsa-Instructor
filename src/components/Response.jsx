import {useState, useRef,useEffect} from "react"
export default ({ conversation = [] }) => {
  const scrollRef = useRef(null);
  const [displayedText, setDisplayedText] = useState([]);
  const [currentlyStreaming, setCurrentlyStreaming] = useState(-1);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  // Handle new messages
  useEffect(() => {
    if (conversation.length > displayedText.length) {
      const newIndex = displayedText.length;
      const newMessage = conversation[newIndex];
      
      // Add empty message slot
      setDisplayedText(prev => [...prev, '']);
      setCurrentlyStreaming(newIndex);
      
      // Stream character by character
      let i = 0;
      const streamChar = () => {
        if (i <= newMessage.length) {
          setDisplayedText(prev => {
            const updated = [...prev];
            updated[newIndex] = newMessage.slice(0, i);
            return updated;
          });
          i++;
          
          if (i <= newMessage.length) {
            setTimeout(streamChar, Math.random() * 50 + 30);
            setTimeout(scrollToBottom, 10);
          } else {
            setCurrentlyStreaming(-1);
            
            // Process next message if there are more
            if (conversation.length > newIndex + 1) {
              setTimeout(() => {
                // This will trigger the useEffect again for the next message
                setDisplayedText(prev => [...prev]);
              }, 300);
            }
          }
        }
      };
      
      setTimeout(streamChar, 100);
    }
  }, [conversation.length, displayedText.length]);

  // Handle initial load - show all existing messages instantly
  useEffect(() => {
    if (conversation.length > 0 && displayedText.length === 0) {
      setDisplayedText([...conversation]);
    }
  }, [conversation, displayedText.length]);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow border dark:bg-gray-900">
      <div 
        ref={scrollRef}
        className="h-96 overflow-y-auto p-4 space-y-3"
      >
        {displayedText.map((text, index) => (
          <div
            key={index}
            className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-sm px-4 py-2 rounded-lg ${
                index % 2 === 0 
                  ? 'bg-blue-500 text-white dark:text-gray-100'    // Right side (even index)
                  : 'bg-gray-100 text-gray-800' // Left side (odd index)
              }`}
            >
              {text}
              {currentlyStreaming === index && (
                <span className="animate-pulse">|</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

