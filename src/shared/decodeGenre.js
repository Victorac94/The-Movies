const genres = {
  'movie': {
    'now_playing': "Now Playing",
    'top_rated': "Top Rated",
    'popular': "Popular",
    'search': 'Search',
    "28": "Action",
    "12": "Adventure",
    "16": "Animation",
    "35": "Comedy",
    "80": "Crime",
    "99": "Documentary",
    "18": "Drama",
    "10751": "Family",
    "14": "Fantasy",
    "36": "History",
    "27": "Horror",
    "10402": "Music",
    "9648": "Mystery",
    "10749": "Romance",
    "878": "Science Fiction",
    "10770": "TV Movie",
    "53": "Thriller",
    "10752": "War",
    "37": "Western",
  },
  'tv': {
    'top_rated': "Top Rated",
    'popular': "Popular",
    'on_the_air': "On Air",
    'search': "Search",
    '10759': "Action & Adventure",
    '16': "Animation",
    '35': "Comedy",
    '80': "Crime",
    '99': "Documentary",
    '18': "Drama",
    '10751': "Family",
    '14': "Fantasy",
    '36': "History",
    '27': "Horror",
    '10402': "Music",
    '10762': "Kids",
    '9648': "Mystery",
    '10763': "News",
    '10764': "Reality",
    '10749': "Romance",
    '10765': "Sci-Fi & Fantasy",
    '878': "Science Fiction",
    '10766': "Soap",
    '10767': "Talk",
    '10770': "TV Movie",
    '53': "Thriller",
    '10768': "War & Politics",
    '10752': "War",
    '37': "Western",
  }
}

export default genres;

export const decodeGenre = (id) => {
  let genre = null;
  switch (id) {
    case 'now_playing':
      genre = "Now Playing";
      break;
    case 'top_rated':
      genre = "Top Rated";
      break;
    case 'popular':
      genre = "Popular";
      break;
    case 'on_the_air':
      genre = "On Air";
      break;
    case 'search':
      genre = "Search Results";
      break;
    case '10759':
      genre = "Action & Adventure";
      break;
    case '28':
      genre = "Action";
      break;
    case '12':
      genre = "Adventure";
      break;
    case '16':
      genre = "Animation";
      break;
    case '35':
      genre = "Comedy";
      break;
    case '80':
      genre = "Crime";
      break;
    case '99':
      genre = "Documentary";
      break;
    case '18':
      genre = "Drama";
      break;
    case '10751':
      genre = "Family";
      break;
    case '14':
      genre = "Fantasy";
      break;
    case '36':
      genre = "History";
      break;
    case '27':
      genre = "Horror";
      break;
    case '10402':
      genre = "Music";
      break;
    case '10762':
      genre = "Kids";
      break;
    case '9648':
      genre = "Mystery";
      break;
    case '10763':
      genre = "News";
      break;
    case '10764':
      genre = "Reality";
      break;
    case '10749':
      genre = "Romance";
      break;
    case '10765':
      genre = "Sci-Fi & Fantasy";
      break;
    case '878':
      genre = "Science Fiction";
      break;
    case '10766':
      genre = "Soap";
      break;
    case '10767':
      genre = "Talk";
      break;
    case '10770':
      genre = "TV Movie";
      break;
    case '53':
      genre = "Thriller";
      break;
    case '10768':
      genre = "War & Politics";
      break;
    case '10752':
      genre = "War";
      break;
    case '37':
      genre = "Western";
      break;
    default:
      genre = 'Home';
      break;
  }
  return genre;
}
