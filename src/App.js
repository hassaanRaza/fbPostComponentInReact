import React, { Component } from 'react';
import './App.css';
import FbPost from './components/fbPost';

class App extends Component {
  constructor() {

    super();

  }

  render() {
    const obj = {
      createdBy: "Hassaan Ilyas",
      avatar: 'https://picsum.photos/200',
      description: "I'm not feeling good today!",
      images: ['https://picsum.photos/200', 'https://picsum.photos/300',
        'https://picsum.photos/400', 'https://picsum.photos/500', 'https://picsum.photos/600',
        'https://picsum.photos/700', 'https://picsum.photos/800'],
      createdAt: Date.now(),
      likes: ['Hassaan', 'Talha', 'Sikander', 'Muneef']
    }

    const obj1 = {
      createdBy: "Talha Ashfaq",
      avatar: 'https://picsum.photos/300',
      description: "Hello friends chai p lo.......!",
      images: ['https://picsum.photos/400', 'https://picsum.photos/500',
        'https://picsum.photos/200', 'https://picsum.photos/300', 'https://picsum.photos/600',
        'https://picsum.photos/700', 'https://picsum.photos/800'],
      createdAt: Date.now(),
      likes: ['Hassaan', 'Talha', 'Sikander', 'Muneef','Hassaan', 'Talha', 'Sikander', 'Muneef']
    }
    
    const obj2 = {
      createdBy: "Kashif Sulaiman",
      avatar: 'https://picsum.photos/400',
      description: "Assalam u alaekum guys, hows you all.......!",
      images: ['https://picsum.photos/300', 'https://picsum.photos/200',
        'https://picsum.photos/400', 'https://picsum.photos/500', 'https://picsum.photos/600',
        'https://picsum.photos/700', 'https://picsum.photos/800'],
      createdAt: Date.now(),
      likes: ['Hassaan', 'Talha', 'Sikander', 'Muneef','Hassaan', 'Talha', 'Sikander', 'Muneef']
    }
    
    return (
      <div className="App-BC">
        <FbPost object={obj} />
        <FbPost object={obj1} />
        <FbPost object={obj2} />
      </div>

      

    );
  }
}

export default App;
