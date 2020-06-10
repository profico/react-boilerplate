/*
```
  const DefaultRouter: React.FC = () => (
    <ErrorBoundary fallback={() => <SomethingWentWrong />} onError={handleError}>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/help" exact component={Help} />
        <Route path="/log-in" exact component={Login} />
        <Route path="/:organization/:view?/:rest?" exact component={OrganizationContainer} />
        <Route component={NotFound} />
      </Switch>
    </ErrorBoundary>
  );
```
*/

export default {
  test: String,
};
