/*
```
  const DefaultRouter: React.FC = () => (
    <ErrorBoundary fallback={() => <SomethingWentWrong />} onError={handleError}>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/help" exact component={Help} />
        <Route path="/log-in" exact component={Login} />
        <Route component={NotFound} />
      </Switch>
    </ErrorBoundary>
  );
```
*/

export default {
  test: String,
};
