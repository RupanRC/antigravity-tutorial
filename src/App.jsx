import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen py-10 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}

export default App
