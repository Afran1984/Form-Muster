import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import ControlForm from './Components/ControlForm/ControlForm'
import ReactForm from './Components/ReactForm/ReactForm'
import HookForm from './Components/HookForm/HookForm'
import ReUsableForm from './Components/ReUsableForm/ReUsableForm'
import Grandpa from './Components/Grandpa/Grandpa'

function App() {
  const handesignuplSubmit = ShowData =>{
    console.log('sign-Up data', ShowData);
}
const handelUpdateProfile = ShowData =>{
  console.log('update-Profile', ShowData);
}


  return (
    <>
      <h1>Forms Muster</h1>
      {/* <Grandpa></Grandpa> */}
      
      {/* <SimpleForm></SimpleForm>
      <ControlForm></ControlForm> */}
      {/* <ReactForm></ReactForm> */}
      {/* <HookForm>
      </HookForm> */}
      <ReUsableForm formTitle={'Sign-In'} handelSubmit={handesignuplSubmit}>
        <div>
          <h5>This Is login</h5>
          <p><small>Plz log in this site</small></p>
        </div>
      </ReUsableForm>
      <ReUsableForm formTitle={'Profile-Update'} submitText='Update' handelSubmit={handelUpdateProfile}>
        <div>
          <h5>Update Your Data</h5>
          <p><small>This site Was Always Update</small></p>
        </div>
      </ReUsableForm>
      
    </>
  )
}

export default App
