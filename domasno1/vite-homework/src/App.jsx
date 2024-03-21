import "./App.css";
import Profile from "./components/Profile";
import Slika from "./assets/Slika.png";

function App() {
  return (
    <>
      <div className="my-profile">
        <Profile
          name="Marina Stojanovic"
          age={30}
          about="I am born in Macedonia, but then I moved in Serbia and there I finished primary and high school. 
        After high school I decided to start college back in Macedonia as a government scholarship holder.
        After working for 7 plus years in the field of Education as a teacher (pedagogue), I
        realized that this field was not for me. So strange? Isn't it? I wanted to get into something
        exciting and more challenging. IT was always there on my mind, but I did
        not have any computer background. But I made the choice, I joined the
        program, and I am halfway to get my certificate like a full stack
        JavaScript Developer, and I feel really good for this choice I made."
          slika_img={Slika}
        />
      </div>
    </>
  );
}

export default App;
