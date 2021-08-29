import React, { useEffect } from 'react'
import ip from 'ip'
import iplocation from 'iplocation'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Deprecated from 'pages/Deprecated'
import UnderConstruction from 'pages/UnderConstruction'

import 'App.css'

const App = () => {
  useEffect(() => {
    const saveVisitor = () => {
      iplocation(ip.address())
        .then((res) =>
          setDoc(doc(getFirestore(), 'visitors', Date.now().toString()), {
            ...res,
            time: Date(),
          })
        )
        .then(() => {
          console.log('Successful')
        })
        .catch((error) => {
          console.log(error)
        })
    }
    if (process.env.NODE_ENV === 'production') {
      saveVisitor()
    }
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/deprecated">
          <Deprecated />
        </Route>
        <Route path="/">
          <UnderConstruction />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
