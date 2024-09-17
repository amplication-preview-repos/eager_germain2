import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UrlAnalysisList } from "./urlAnalysis/UrlAnalysisList";
import { UrlAnalysisCreate } from "./urlAnalysis/UrlAnalysisCreate";
import { UrlAnalysisEdit } from "./urlAnalysis/UrlAnalysisEdit";
import { UrlAnalysisShow } from "./urlAnalysis/UrlAnalysisShow";
import { ComparativeCriteriaList } from "./comparativeCriteria/ComparativeCriteriaList";
import { ComparativeCriteriaCreate } from "./comparativeCriteria/ComparativeCriteriaCreate";
import { ComparativeCriteriaEdit } from "./comparativeCriteria/ComparativeCriteriaEdit";
import { ComparativeCriteriaShow } from "./comparativeCriteria/ComparativeCriteriaShow";
import { BooleanCriteriaList } from "./booleanCriteria/BooleanCriteriaList";
import { BooleanCriteriaCreate } from "./booleanCriteria/BooleanCriteriaCreate";
import { BooleanCriteriaEdit } from "./booleanCriteria/BooleanCriteriaEdit";
import { BooleanCriteriaShow } from "./booleanCriteria/BooleanCriteriaShow";
import { SeoTaskList } from "./seoTask/SeoTaskList";
import { SeoTaskCreate } from "./seoTask/SeoTaskCreate";
import { SeoTaskEdit } from "./seoTask/SeoTaskEdit";
import { SeoTaskShow } from "./seoTask/SeoTaskShow";
import { PageSpeedList } from "./pageSpeed/PageSpeedList";
import { PageSpeedCreate } from "./pageSpeed/PageSpeedCreate";
import { PageSpeedEdit } from "./pageSpeed/PageSpeedEdit";
import { PageSpeedShow } from "./pageSpeed/PageSpeedShow";
import { BacklinksList } from "./backlinks/BacklinksList";
import { BacklinksCreate } from "./backlinks/BacklinksCreate";
import { BacklinksEdit } from "./backlinks/BacklinksEdit";
import { BacklinksShow } from "./backlinks/BacklinksShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"SEO Score Service"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UrlAnalysis"
          list={UrlAnalysisList}
          edit={UrlAnalysisEdit}
          create={UrlAnalysisCreate}
          show={UrlAnalysisShow}
        />
        <Resource
          name="ComparativeCriteria"
          list={ComparativeCriteriaList}
          edit={ComparativeCriteriaEdit}
          create={ComparativeCriteriaCreate}
          show={ComparativeCriteriaShow}
        />
        <Resource
          name="BooleanCriteria"
          list={BooleanCriteriaList}
          edit={BooleanCriteriaEdit}
          create={BooleanCriteriaCreate}
          show={BooleanCriteriaShow}
        />
        <Resource
          name="SeoTask"
          list={SeoTaskList}
          edit={SeoTaskEdit}
          create={SeoTaskCreate}
          show={SeoTaskShow}
        />
        <Resource
          name="PageSpeed"
          list={PageSpeedList}
          edit={PageSpeedEdit}
          create={PageSpeedCreate}
          show={PageSpeedShow}
        />
        <Resource
          name="Backlinks"
          list={BacklinksList}
          edit={BacklinksEdit}
          create={BacklinksCreate}
          show={BacklinksShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
