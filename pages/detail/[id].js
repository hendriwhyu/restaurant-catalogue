import Image from 'next/image';

export default function Detail({ restaurant }) {
  const {
    name,
    description,
    pictureId,
    menus: { foods, drinks },
  } = restaurant;
  return (
    <div className="container">
      <Image
        width={120}
        height={120}
        src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`}
        alt={name}
      />
      <header>
        <h1>{name}</h1>
        <p>{description}</p>
      </header>

      <br />

      <main>
        <h2>Informasi Menu</h2>

        <h3>Makanan</h3>
        <ul>
          {foods.map((food) => (
            <li key={food.id}>{food.name}</li>
          ))}
        </ul>

        <h3>Minuman</h3>
        <ul>
          {drinks.map((drink) => (
            <li key={drink.id}>{drink.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  // call external API endpoint to get ids of restaurant
  const response = await fetch('https://restaurant-api.dicoding.dev/list');
  const { restaurants } = await response.json();
  const ids = restaurants.map((restaurant) => restaurant.id);
  return {
    paths: ids.map((id) => ({ params: { id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // fetch necessary data for the restaurant detail page using params.id
  const response = await fetch(
    `https://restaurant-api.dicoding.dev/detail/${params.id}`,
  );
  const { restaurant } = await response.json();
  return {
    props: {
      restaurant,
    },
  };
}
