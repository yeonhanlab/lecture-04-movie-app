import "./styles/global.css" // global.css를 불러오고 싶다. from이 안 붙음.
import { BrowserRouter } from "react-router/internal/react-server-client";
import { Route, Routes } from "react-router";
import Home from "./routes/Home.jsx";
import Detail from "./routes/Detail.jsx"; // global.css를 불러오고 싶다. from이 안 붙음. 이 파일을 통째로 불러온다는 뜻이어서!

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// dotenv에서는 process.env.환경변수KEY
// VITE를 사용하는 React에서는 import.meta.env.환경변수KEY


function App() {

    return (
        <BrowserRouter>
            {/*
                 BrowserRouter로 감싸주어서, URL이 변경됨을 감지하여
                 페이지 이동 처리를 할 수 있도록 함.
                 => BrowserRouter가 감싸지지 않은 컴포넌트는 안 바뀐다.
             */}
            <Routes>
                {/*
                     Route는 2가지 속성을 가짐
                     path 속성 : 이 분기에 해당하는 URL(경로)로 들어오면
                     element 속성 : 넣어준 값의 컴포넌트(화면에 출력될 내용)를 화면에 랜더링해줘
                 */}
                <Route path={"/"} element={<Home />} />
                <Route path={"/:id"} element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
