import { lazy, Suspense } from "react";
import "./App.css";
import CustomCursor from "./components/CustomCursor";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import PlexusBackground from "./components/PlexusBackground";
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <>
      <div style={{ display: 'none' }}>Build v2.1.2 - {new Date().toISOString()}</div>
      <CustomCursor />
      <PlexusBackground />
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
