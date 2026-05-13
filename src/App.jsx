import SkillList from "./skillList";

function App() {
  const skills = [
    { name: "JS", level: 95 },
    { name: "React", level: 80 },
    { name: "Node", level: 92 }
  ];

  return (
    <div>
      <h1>My Skills</h1>

      <SkillList skills={skills} />
    </div>
  );
}

export default App;
