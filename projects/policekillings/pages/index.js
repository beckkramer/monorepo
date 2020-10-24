import Head from 'next/head'

import { AppBar, NavLink } from 'components'

import BrutalityByState from "components/widgets/BrutalityByState";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar
        projectDescription="Police Killings App"
        projectName="Police Killings App"
      >
        <NavLink href="/one" label="Police Killings App" />
      </AppBar>

      <main className={styles.main}>
        <BrutalityByState/>
      </main>
    </div>
  )
}