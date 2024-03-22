import './App.css'
import Card from './components/Card'

function App() {
 return (
  <>
  <div className='my-cards'>
    
    <Card 
    img='https://a0.muscache.com/im/pictures/83738e60-4654-4faa-af1a-f53d02acbe6c.jpg?im_w=1200'
    title='Provincia di Lecce, Italy'
    description='335 kilometers away'
    date='Mar 28- Apr 2'
    price={2173}

    />

<Card 
    img='https://a0.muscache.com/im/pictures/18aa682f-3d21-4a21-9e6a-9cb85bdbbc48.jpg?im_w=320'
    title='Provincia di Brindisi, Italy'
    description='Built in 2020'
    date='Mar 22-27'
    price={220}

    />

<Card 
    img='https://a0.muscache.com/im/pictures/miso/Hosting-872428657085499257/original/82d73a6c-0b01-46da-a8b9-7cf3301b2b62.jpeg?im_w=720'
    title='San Michele salentino, Italy'
    description='352 kilometers away'
    date='Jun 15-21'
    price={498}

    />

<Card 
    img='https://a0.muscache.com/im/pictures/caf126ad-5fe8-4dc8-86b7-4c51a16c2940.jpg?im_w=320'
    title='Ostuni, Italy'
    description='355 kilometers away'
    date='May 11-18'
    price={624}
    />

<Card 
    img='https://a0.muscache.com/im/pictures/miso/Hosting-6882416/original/9bfc4e74-40d3-4cdd-82d1-33af5e7bdb2f.jpeg?im_w=720'
    title='Ceglie Messapica, Italy'
    description='365 kilometers away'
    date='May 23-28'
    price={80}

    />

<Card 
    img='https://a0.muscache.com/im/pictures/miso/Hosting-54087472/original/374b7479-26f3-467d-84de-86cfaae7aa8e.jpeg?im_w=720'
    title='Ceglie Messapica, Italy'
    description='363 kilometers away'
    date='Apr 15-20'
    price={253}

    />

<Card 
    img='https://a0.muscache.com/im/pictures/miso/Hosting-51242253/original/fb055841-a2d0-4923-8443-86b0cb9892ca.jpeg?im_w=720'
    title='Marina di Leuca, Italy'
    description='355 kilometers away'
    date='May 1-6'
    price={340}

    />

<Card 
    img='https://a0.muscache.com/im/pictures/prohost-api/Hosting-859241191388587730/original/748eb940-5282-4cb3-b434-9390bfa5def2.jpeg?im_w=720'
    title='Cisternino, Italy'
    description='362 kilometers away'
    date='Apr 1-6'
    price={583}

    />

<Card 
    img='https://a0.muscache.com/im/pictures/prohost-api/Hosting-567777638421434771/original/9731d696-b571-4d3a-b5e5-a2daaac797c8.jpeg?im_w=720'
    title='Ostuni, Italy'
    description='356 kilometers away'
    date='Apr 16-21'
    price={263}

    />




    </div>
    </>
 )
}

export default App
