import React from 'react';
import Fighter from './Fighter';

function hasNumber(myString) {
  return /\d/.test(myString);
}

function ListFighters(props) {
  const fighters = props.fighters.map((scraped, index) => {
    if (scraped['avatar-src'] === '')
      scraped['avatar-src'] =
        'https://via.placeholder.com/146.jpg?text=No+Avatar';

    if (hasNumber(scraped.nickname)) {
      scraped.record = scraped.nickname;
      scraped.nickname = 'Too badass for a nickname';
    }

    if (scraped.record === '0 - 0 - 0') scraped.record = 'No data yet';

    return (
      <Fighter
        record={scraped.record}
        key={scraped['web-scraper-order']}
        name={scraped.name}
        avatar={scraped['avatar-src']}
        nickname={scraped.nickname}
        onClick={props.onClick}
      />
    );
  });

  return <ul className="grid grid-cols-3 gap-4">{fighters}</ul>;
}

export default ListFighters;
