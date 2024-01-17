import React from "react";

import Branding from "../organisms/branding"
import Layout from "../templates/layout";
import Header from "../organisms/header";
import Menu from "../organisms/menu";
import Kpi from "../molecules/kpi";
import TopScorer from "../molecules/top-scorer";
import Result from "../molecules/result";
import News from "../molecules/news";

function App() {
  const [search, setSearch] = React.useState("")
  const [searchResults, setSearchResults] = React.useState("")

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const getSearchResults = () => {
    console.log(`Buscando datos con: ${search}`)
  }

  const [kpiData, setKpiData] = React.useState([]);
  const [topScorerData, setTopScorerData] = React.useState([]);
  const [resultData, setResultData] = React.useState([]);
  const [newsData, setNewsData] = React.useState([]);

  //kpi
  React.useEffect(() => {
    async function fetchKpiData() {
      const response = await fetch ('http://localhost:3004/kpi');
      const data = await response.json();
      setKpiData(data)
    }
    fetchKpiData();
  }, []);

  //Top Scorer
  React.useEffect(() => {
  async function fetchTopScorerData() {
    const response = await fetch ('http://localhost:3004/top');
    const data = await response.json();
    setTopScorerData(data)
  }
  fetchTopScorerData();
}, []);

//Result
React.useEffect(() => {
  async function fetchResultData() {
    const response = await fetch ('http://localhost:3004/result');
    const data = await response.json();
    setResultData(data)
  }
  fetchResultData();
}, []);

//News
React.useEffect(() => {
  async function fetchNewsData() {
    const response = await fetch ('http://localhost:3004/news');
    const data = await response.json();
    setNewsData(data)
  }
  fetchNewsData();
}, []);

const [kpi1,kpi2,kpi3,kpi4] = kpiData;

  return (
    <div className="App">
      <Layout>
        <Menu/>
        <Header search={search} onSearch={getSearchResults} onSearchType={handleSearch}/>
        <Branding/>
        <Kpi data={kpi1}/>
        <Kpi data={kpi2}/>
        <Kpi data={kpi3}/>
        <Kpi data={kpi4}/>
        <TopScorer data={topScorerData}/>
        <Result data={resultData} />
        <News data={newsData}/>
      </Layout>
    </div>
  );
}

export default App;
