import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

function RestaurantItem({ id, pictureId, name, description }) {
  return (
    <div className="card">
      <Image
        width={120}
        height={120}
        src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`}
        alt={name}
      />
      <div className="container">
        <h2>
          <Link href={`/detail/${id}`}>{name}</Link>
        </h2>
        <p>{description}</p>
        <br />
      </div>
    </div>
  );
}

RestaurantItem.propTypes = {
  id: PropTypes.string.isRequired,
  pictureId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RestaurantItem;
