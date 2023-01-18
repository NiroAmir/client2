import "./pageHeaderStyle.css";

const PageHeader = () => {
  const sum = 5 * 6;

  // תרגיל: הצג במסך את שם הבן אדם הראשון ששמו מתחיל באות ב

  const array = ["beeri", "boris", "david", "yossi", "moshe"];
  let nameStartWithB = array.find((name) => name[0] === "b");
  //תרגיל שני: הצג את האובייקט סטודנט בדף
  const student = {
    firstName: "Nir",
    lastName: "Amir",
    age: 36,
    phone: "0528458391",
  };

  let myStyle = { color: "red", fontFamily: "arial" };
  return (
    <>
      <h2 style={myStyle}>This is the header!</h2>
      <h2 className="blue">{sum}</h2>

      <p style={{ color: "green", fontFamily: "arial" }}>{nameStartWithB}</p>

      <p>{student.firstName}</p>
      <p>{student.lastName}</p>
      <p>{student.age}</p>
      <p>{student.phone}</p>
    </>
  );
};

export default PageHeader;
