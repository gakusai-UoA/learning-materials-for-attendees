// Part 6 - Props：部品に「注文」を付ける
// 部品側
const UserCard = ({ name, role }: { name: string; role: string }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

// 使う側
const App = () => {
  return (
    <>
      <UserCard name="たなか" role="部長" />
      <UserCard name="さとう" role="エンジニア" />
    </>
  );
};
