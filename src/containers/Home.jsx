import React from "react";
import Page from "../components/layout/Page";
import Card from "../components/layout/Card";
import CardStack from "../components/layout/CardStack";

export default () => (
  <Page className="home" title="Your Bookmarks">
    <CardStack>
      <Card title="Google">Last visited 2017-11-11</Card>
      <Card title="Facebook">Last visited 2017-11-10</Card>
    </CardStack>
  </Page>
);
