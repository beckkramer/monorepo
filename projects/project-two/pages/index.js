import { AppBar, NavLink } from 'components'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <AppBar
        projectDescription="This is for project two"
        projectName="Project Two"
      >
        <NavLink href="/one" label="Project Two FAQs" />
      </AppBar>

      <main className={styles.main}>
        Content!
      </main>
    </div>
  )
}
