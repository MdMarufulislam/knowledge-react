import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/header'

function App() {


  return (
    <>
      <Header></Header>
      <div className='md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
