function SkillBadge({ skill }) {
  return (
    <div>
      <h3>
        {skill.name} - {skill.level}%

        {skill.level >= 90 && " ★"}
      </h3>
    </div>
  );
}

export default SkillBadge;