import { Header } from './components/Header';
import { Post } from './components/Post';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/izadoranetz.png',
      name: 'Izadora Netz',
      role: 'Web Dev',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      {
        type: 'paragraph',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
      },
      { type: 'link', content: 'https://behance.net/izadoranetz' },
    ],
    publishedAt: new Date('2022-11-13 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/angelabauer.png',
      name: 'Angela Yu',
      role: 'Dev e Professora',
    },
    content: [
      { type: 'paragraph', content: 'Meow' },
      {
        type: 'paragraph',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
      },
      { type: 'link', content: 'https://github.com/angelabauer' },
    ],
    publishedAt: new Date('2022-11-13 20:13:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/izadoranetz.png',
      name: 'Cajuzinha',
      role: 'Dona de tudo',
    },
    content: [
      { type: 'paragraph', content: 'Meooooow ow ow ow' },
      {
        type: 'paragraph',
        content: 'Lorem ipsum, dolor sit amet consectetur elit.',
      },
      { type: 'link', content: 'https://behance.net/izadoranetz' },
    ],
    publishedAt: new Date('2022-11-14 20:33:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
