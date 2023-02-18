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
        color: '#010101',
        background: '#FDF7F2'
      }}
    >
          
      <NewsList/>
      {/* React homework template */}
    </div>
  );
};
