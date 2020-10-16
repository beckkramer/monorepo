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
  const universalAPIFetch = async (url) => {
    if (!process.browser) {
      const { getApiData } = require("api/routes/appRoutes");
      return getApiData(url);
    }
    const rawData = await fetch(`/api/${url}`);
    return rawData.json();
  };
  
  const getNationalData = async () => {
    const shootingsByState = await universalAPIFetch(
      "count/shootings/state/name"
    );
    const populationDataRaw = await fetch(
      "https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest"
    );
    const shootingsOverTime = await universalAPIFetch("count/shootings/overtime");
    const last20Items = await universalAPIFetch("shootings/last20");
    const unarmedItems = await universalAPIFetch("count/unarmedKillings");
    const armedItems = await universalAPIFetch("count/armedKillings");
    const shootings = await universalAPIFetch("shootings");
  
    const topPoliceDepartments = await universalAPIFetch("count/shootings/pd");
    const populationData = await populationDataRaw.json();
    const filteredShootingsByState = shootingsByState.filter((state) =>
      populationData.data.find((s) => s.State === state.state)
    );
    const shootingsPerCapita = filteredShootingsByState.map((state) => ({
      ...state,
      total:
        state.total /
        (populationData.data.find((s) => s.State === state.state).Population /
          1000000),
    }));
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
};
}
