import SelfIntroduction from "./components/SelfIntroduction";
import UserCard from "./components/UserCard";

function App() {
  const users = [
    { id: 1, name: "Mathi", city: "Dharmapuri", age: 25, email: "mathi@gmail.com", phone: "9876543210" },
    { id: 2, name: "Arun", city: "Salem", age: 24, email: "arun@gmail.com", phone: "9876543211" },
    { id: 3, name: "Kumar", city: "Chennai", age: 26, email: "kumar@gmail.com", phone: "9876543212" },
    { id: 4, name: "Priya", city: "Coimbatore", age: 23, email: "priya@gmail.com", phone: "9876543213" },
    { id: 5, name: "Vijay", city: "Madurai", age: 27, email: "vijay@gmail.com", phone: "9876543214" }
  ];

  return (
    <div>
      <SelfIntroduction />

      

      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;