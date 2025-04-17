import logo from './logo.svg';
import './App.css';
import Sillabuses from './components /Sillabus/Sillabus';
import NavBarNew from './components /CourseNav/NavBarNew';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import AboutMe from './components /me/Me';
import ByMe from './components /ByMe/ByMe';
import MyServices from './components /Services/Services';
import ThirdScreen from './screens/ThirdScreen';

function App() {
  return <>
  <NavBarNew/>
  <FirstScreen/>
  <SecondScreen/>
  <AboutMe/>
  <ThirdScreen/>
  <MyServices/>

  <ByMe/>
  </>
}

export default App;
