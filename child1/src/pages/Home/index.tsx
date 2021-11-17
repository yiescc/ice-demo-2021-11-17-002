import { useHistory } from 'ice';

const Home = () => {
  const history = useHistory();

  return (
    <div>
      <h1>welcome child1</h1>

      <button
        onClick={() => {
          history.push('/jump');
        }}
      >
        go /jump
      </button>
    </div>
  );
};

export default Home;
