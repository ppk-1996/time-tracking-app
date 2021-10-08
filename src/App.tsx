import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Daily from "./components/Daily";
import Weekly from "./components/Weekly";
import Monthly from "./components/Monthly";
import data from "./assets/data";
function App() {
  return (
    <main className="md:h-screen md:flex">
      <div
        className="font-rubik font-normal mx-6 my-12 text-white
    md:grid md:grid-cols-12 md:m-auto md:w-max md:gap-5 "
      >
        <Header />
        <div className="md:grid md:grid-cols-3 md:gap-5 md:col-span-8">
          <Switch>
            <Route exact path="/weekly">
              <Weekly weeklyReport={data} />
            </Route>
            <Route exact path="/monthly">
              <Monthly monthlyReport={data} />
            </Route>
            <Route exact path="/daily">
              <Daily dailyReport={data} />
            </Route>
            <Route path="*">
              <Redirect to="/daily" />
            </Route>
          </Switch>
        </div>
      </div>
    </main>
  );
}

export default App;
