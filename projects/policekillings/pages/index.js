import Head from 'next/head'

import { AppBar, NavLink } from 'components'

import React, { useState, useEffect } from "react";
// import { Container, Col, Row, Form, Badge } from "react-bootstrap";

import {
  Box,
  Chip,
  Container,
  Grid,
  Hidden,
  Switch,
  Typography,
} from "@material-ui/core";


import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Police Killings App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar
        projectDescription="An app that reports out on police killing statistics throughout the United States"
        projectName="Police Killings App"
      >
        <NavLink href="/one" label="Project One Contact" />
      </AppBar>

      <main className={styles.main}>
        Content!
      </main>
    </div>
  )
}
