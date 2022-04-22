import { Route, Switch } from "react-router-dom";
import { WellcomeRoute } from "./WellcomeRoute";

export const Navigation = () => {
  return (
    <Switch>
      <Route exact path="/" component={WellcomeRoute} />
    </Switch>
  );
};
