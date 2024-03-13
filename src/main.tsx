import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import ProfileCard from './components/ProfileCard.tsx'
import SkillsCard from './components/SkillsCard.tsx'
import LinkButton from './components/LinkButton.tsx'

document.title = "Portolio 2024"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
      <ProfileCard/>
      <SkillsCard>
        <LinkButton name='git' url='https://git-scm.com/' src='./src/assets/icons/git.svg'/>
        <LinkButton name='java' url='https://www.java.com/' src='./src/assets/icons/java.svg'/>
        <LinkButton name='maven' url='https://maven.apache.org/' src='./src/assets/icons/maven.svg'/>
        <LinkButton name='gradle' url='https://gradle.org/' src='./src/assets/icons/gradle.svg'/>
        <LinkButton name='spring' url='https://spring.io/' src='./src/assets/icons/spring.svg'/>
        <LinkButton name='kotlin' url='https://kotlinlang.org/' src='./src/assets/icons/kotlin.svg'/>
        <LinkButton name='jetpack-compose' url='https://developer.android.com/jetpack/compose?hl=es-419' src='./src/assets/icons/jetpack-compose.png'/>
        <LinkButton name='javascript' url='https://developer.mozilla.org/es/docs/Web/JavaScript' src='./src/assets/icons/javascript.svg'/>
        <LinkButton name='typescript' url='https://www.typescriptlang.org/' src='./src/assets/icons/typescript.svg'/>
        <LinkButton name='node' url='https://nodejs.org/en' src='./src/assets/icons/nodejs.svg'/>
        <LinkButton name='react' url='https://react.dev/' src='./src/assets/icons/react.svg'/>
        <LinkButton name='python' url='https://www.python.org/' src='./src/assets/icons/python.svg'/>
        <LinkButton name='c#' url='https://dotnet.microsoft.com/es-es/languages/csharp' src='./src/assets/icons/csharp.svg'/>
        <LinkButton name='unity' url='https://unity.com/es' src='./src/assets/icons/unity.svg'/>
        <LinkButton name='mysql' url='https://spring.io/' src='./src/assets/icons/mysql.svg'/>
        <LinkButton name='sqlserver' url='https://es.wikipedia.org/wiki/Microsoft_SQL_Server' src='./src/assets/icons/sqlserver.svg'/>
        <LinkButton name='sqlite' url='https://www.sqlite.org/' src='./src/assets/icons/sqlite.svg'/>
        <LinkButton name='firebase' url='https://firebase.google.com/?hl=es' src='./src/assets/icons/firebase.svg'/>
        <LinkButton name='docker' url='https://www.docker.com/' src='./src/assets/icons/docker.svg'/>
        <LinkButton name='linux' url='https://es.wikipedia.org/wiki/GNU/Linux' src='./src/assets/icons/linux.svg'/>
        
      </SkillsCard>
  </React.StrictMode>
)
