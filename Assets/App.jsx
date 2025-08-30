import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      import ProfileCard from "./ProfileCard";

export default function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f8f8f8"
    }}>
      <ProfileCard
        name="Aarav Sharma"
        role="Frontend Developer"
        avatarUrl="https://i.pravatar.cc/150?img=12"
        bio="Loves building clean UIs with React. Enjoys teaching, coffee, and CSS tricks."
        skills={["React", "JavaScript", "Vite", "CSS"]}
        onFollow={(state) => console.log("Follow State:", state)}
      />
    </div>
  );
}

        
    </>
  )
}

export default App
