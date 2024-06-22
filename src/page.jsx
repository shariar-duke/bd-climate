import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { useContext } from "react";
import { WeatherContext } from "./context";
export default function Page() {
  const { loading } = useContext(WeatherContext);
  return (
    <>
      {loading.state ? (
        <div className="flex h-full justify-center items-center">
          <p>{loading.message}</p>
        </div>
      ) : (
        <div className="grid place-items-center h-screen">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
