import { Header } from './components/Header';
import { Post } from './Post';
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Izadora andorinea"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, quisquam eius, aliquid aut ut, fugit eveniet ea voluptates assumenda temporibus accusamus iste enim quidem fugiat. Molestiae rerum officiis aliquid quas?"
      />
      <Post
        author="Cacau gatineo"
        content="Birman manx lynx yet cheetah. Cornish rex turkish angora malkin. Abyssinian american bobtail or thai or siberian, but himalayan but scottish fold and lynx. Himalayan."
      />
    </div>
  );
}
