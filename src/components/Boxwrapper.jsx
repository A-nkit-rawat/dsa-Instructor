import Box from "./Box"
import Description from "./Description"
import TextComponent from "./TextComponent"
import { GoogleGenAI } from "@google/genai";
import { useState } from "react";
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API});
async function handleApi(contents) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents,
    config: {
      systemInstruction: "You are a DSA (Data Structures and Algorithms) Instructor." 
      +"STRICT RULES:"
      +"- ONLY answer questions related to data structures, algorithms, time complexity, space complexity, coding problems, and algorithmic thinking"
      +"- If question is NOT DSA-related, respond:" 
      +"I only help with DSA topics. Please ask about data structures, algorithms, or coding problems."
      +"- Keep ALL responses between 30-50 words maximum"
      +"- Be concise, direct, and educational"
      +"- Focus on core concepts, time/space complexity, and practical implementation"
      +"TOPICS I COVER:"
      +"- Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hash Tables"
      +"- Sorting, Searching, Dynamic Programming, Greedy, Backtracking"
      +"- Big O notation, Algorithm analysis"
      +"- Coding interview problems"
      +"RESPONSE FORMAT:"
      +"- Maximum 30-50 words"
      +"- Clear, actionable explanations"
      +"- Include time/space complexity when relevant"
      +"- Suggest next steps for learning"
      ,
    },
  });
  // console.log(response.candidates[0].content.parts[0].text);
  return response.candidates[0].content.parts[0].text;
  
}



export default ()=>{  
    const[conversation,setConversation]=useState(["Your Question ", "AI response"]);  
    return (
        <>  
            <div className="grid grid-cols-1 md:grid-cols-2 justify-around text-center">
                <div className="flex-col justify-around ">
                    <Box component={<Description/>} response={false}></Box>
                    <Box component={<TextComponent/>}></Box>
                    {/* <button className="bg-green-400 text-gray-900 dark:text-gray-100 font-bold text-4xl rounded-2xl w-2xs mt-2 ">ASK</button> */}
                    <button className="bg-green-500 text-white font-bold py-2 px-4 rounded
                     active:bg-blue-700 active:shadow-inner active:translate-y-0.5
                       transition-all duration-100 ease-in-out w-2xs text-2xl"  
                       onClick={async(e)=>{
                        const value=document.getElementById("context").value;
                        document.getElementById("context").value='Ask Your DSA Question ?'
                        const response= await handleApi(value); 
                        // console.log(response);
                                setConversation([...conversation,value,response])
                       }} >_A_S_K_
                    </button>
                </div>
                <div className="md:flex-col justify-around ml-3">
                    <Box component={"Your Chat "} response={false}></Box>
                    <Box component={conversation} response={true}></Box>
                </div>
            </div>
            
        </>
    )
}