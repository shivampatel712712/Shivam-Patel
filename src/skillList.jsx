import SkillBadge from "./SkillBadge";

function SkillList({ skills }) {
  return (
    <div>
      {skills.map((skill, index) => (
        <SkillBadge key={index} skill={skill} />
      ))}
    </div>
  );
}

export default SkillList;