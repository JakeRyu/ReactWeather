var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>About</h1>
      <p>This is a weather application built on React.</p>
      <p>Here are some of tools I used:</p>
      <ul>
        <li>
          <a href='https://facebook.github.io/react'>React</a> - This is the javascript framework used.
        </li>
        <li>
          <a href='http://openweathermap.org'>Open Weather Map</a> - I used Open Weather Map to search for whether data by a city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
