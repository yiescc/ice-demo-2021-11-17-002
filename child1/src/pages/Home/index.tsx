import { useHistory } from 'ice';

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <h1>welcome child1</h1>
      <button
        onClick={() => {
          history.push('/test');
        }}
      >
        go /test
      </button>
      <button
        onClick={() => {
          history.push('/plan/test');
        }}
      >
        go /plan/test
      </button>
    </div>
  );
};

export default Home;
