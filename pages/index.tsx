import sequelize from "lib/db";

export default function Home() {
  const testCon = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };

  testCon();

  return <div>Home</div>;
}
