import 'bootstrap/dist/css/bootstrap.min.css'; // 그리드 만 빼옴
import LoginForm from "../Components/LoginForm";

function Home() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Home;
