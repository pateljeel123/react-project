
import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';
import Header from './Header';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
};

const MainContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <Header />
      <main>
        <h1 style={{textAlign:"center"}}>Hello, {theme} theme!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae recusandae voluptate iure in ex saepe atque suscipit aut? Necessitatibus inventore laborum nostrum itaque animi voluptas unde quisquam labore quae id?
        Explicabo labore quae reiciendis eveniet, doloribus error distinctio voluptas accusamus aliquam! Illum quae, commodi eveniet, autem modi sit voluptatem pariatur quas quos nisi inventore veniam, qui porro quod? Debitis, at.
        Modi quam dignissimos labore animi doloremque quidem omnis minima dolore voluptatibus fugit nesciunt enim reprehenderit quo natus et, ratione esse! Nisi omnis consectetur ab facere autem. Modi impedit ut nesciunt?
        Eligendi id deserunt magni vitae voluptatem alias rem quae, similique, optio distinctio nulla voluptatibus! Voluptatibus facilis odit harum culpa perspiciatis voluptates ad voluptatem perferendis quia non maxime ducimus, quas magnam?
        Temporibus accusantium id quaerat velit aut ratione repellat rerum cum officiis, alias doloribus, ipsam inventore, dolore tenetur voluptatem expedita excepturi consectetur. Perspiciatis ullam commodi officiis suscipit qui? Hic, fuga autem?
        Ducimus nesciunt eos ullam, officia aperiam, at labore blanditiis explicabo necessitatibus minima voluptatibus ipsa natus omnis cupiditate officiis recusandae? Minima, totam? Quibusdam omnis fuga fugiat? Exercitationem distinctio quaerat blanditiis rerum?
        Quod provident ratione saepe distinctio? Consequatur, voluptates! Sunt explicabo placeat vitae earum accusamus culpa facilis quae praesentium minus dicta dolores dolorum, nam excepturi a, eaque veniam magnam modi ex odit?
        Aliquam, perspiciatis architecto amet illo omnis quasi, laboriosam modi facilis, explicabo tempora animi aspernatur. Facere soluta sapiente, ratione inventore dolores magni. Ullam laborum officia odit nulla odio, doloremque cumque ducimus.
        Quae velit, eveniet numquam, accusamus natus iure ducimus porro hic eos, iusto voluptas blanditiis. Vitae cumque, delectus exercitationem, tempora dolore dignissimos non odio, et provident ex quis qui quisquam nobis.
        Rerum sit molestiae incidunt doloremque, officia commodi nesciunt in vitae facere excepturi laborum quo consequatur illo distinctio quisquam officiis eveniet dignissimos accusantium provident quae, quia maxime deserunt fugit. Molestiae, ea.
        Tempora placeat, repellendus, facilis inventore eius molestiae tenetur ab iusto fugiat rerum eveniet dolores sit vero! Rerum nobis, culpa inventore quam, alias aliquam voluptatibus, consectetur perferendis obcaecati fugiat dicta sunt?
        Ad enim sed mollitia accusamus? Recusandae voluptas doloribus culpa inventore non magni, qui dicta minima eligendi porro libero quos temporibus architecto quis assumenda obcaecati eum incidunt quidem illo. Ad, nesciunt.
        Autem obcaecati ut laudantium repellat. Ex velit laboriosam, nobis labore, laborum iste, consequuntur minus totam necessitatibus recusandae assumenda sed odio iure minima alias praesentium nemo modi quam consectetur voluptates ea.
        Repellendus harum error pariatur nostrum quas! Expedita delectus unde vitae culpa ab pariatur, reiciendis animi ipsum, cumque omnis ducimus quidem quae. Sit autem repellendus aperiam numquam in temporibus, accusamus quas.
        Esse, ab distinctio. Neque cumque voluptatum iste! Nulla sit ratione optio rem natus mollitia esse quo quis. Perferendis, modi sint beatae tempora, eum numquam obcaecati voluptas animi earum repudiandae nemo.</p>
        <ThemeToggleButton />
      </main>
      <Footer />
    </div>
  );
};

export default App;
