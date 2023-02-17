import NewsList from "./News/NewsList/NewsList";

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
          <h1>News</h1>
      <NewsList/>
      {/* React homework template */}
    </div>
  );
};
