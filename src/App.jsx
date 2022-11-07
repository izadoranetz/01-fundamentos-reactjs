import { Header } from './components/Header';
import { Post } from './components/Post';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Izadora andorinea"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, quisquam eius, aliquid aut ut, fugit eveniet ea voluptates assumenda temporibus accusamus iste enim quidem fugiat. Molestiae rerum officiis aliquid quas?"
          />
          <Post
            author="Cacau gatineo"
            content="Birman manx lynx yet cheetah. Cornish rex turkish angora malkin. Abyssinian american bobtail or thai or siberian, but himalayan but scottish fold and lynx. Himalayan."
          />
        </main>
      </div>
    </div>
  );
}
