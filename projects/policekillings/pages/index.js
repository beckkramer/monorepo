import Head from 'next/head'

import { AppBar, NavLink } from 'components'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar
        projectDescription="This is one."
        projectName="Project One"
      >
        <NavLink href="/one" label="Project One Contact" />
      </AppBar>

      <main className={styles.main}>
        Content!
      </main>
    </div>
  )
}
