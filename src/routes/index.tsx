import { Route, Switch } from "react-router-dom";
import { WellcomeRoute } from "./WellcomeRoute";
import { JoinGameRoute } from "./JoinGameRoute";

export const Navigation = () => {
  return (
    <Switch>
      <Route exact path="/" component={WellcomeRoute} />
      <Route path="/join" component={JoinGameRoute} />
    </Switch>
  );
};
