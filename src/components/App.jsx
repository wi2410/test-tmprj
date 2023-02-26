import NewsList from './News/NewsList/NewsList';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',

        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        background: '#FDF7F2',
      }}
    >
      <NewsList />
    </div>
  );
};
