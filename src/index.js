import React from 'react';
import ReactDOM from 'react-dom';
import ChackNorrisJoke from './Components/ChackNorrisJoke_12.1/ChackNorrisJoke.jsx';
import Focus from './Components/Focus_14.1/Focus.jsx'
import Copy from './Components/Copy_14.2/Copy.jsx'
import AppData from './Components/DataMassaging_13.1/AppData.jsx';
import Avatar from './Components/Avatar_13.2/Avatar.jsx';
import Text from './Components/Text_hide-show_18.1/Text';
import Todo from './Components/Simple_todo_18.2/Todo';
import Time from './Components/Time_convert_18.3/Time';
import Checkboxes from './Components/Controlled_checkboxes/Checkboxes';
import SimpleFetch from './Components/Simple_fetch_hooks_19.1/SimpleFetch';
import Countries from './Components/Countries_hook_api_19.2/Countries';
import Algolia from './Components/Algolia_api_19.3/Algolia.jsx';
import JokeWithHooks from './Components/ChackNorrisRefactor_19.4/JokeWithHooks';
import CancelRequest from './Components/CancelRequest_20.1/CancelRequest';
import EditingFocus from './Components/EditingFocus_useRef_21.1/EditingFocus';
import PlayPause from './Components/PlayPauseVideo_21.2/PlayPause';
import ImageToogle from './Components/ImageToogle_ 21.3/ImageToogle';

ReactDOM.render(
  <React.StrictMode>
     {/* <ChackNorrisJoke />
     <Focus />
     <Copy /> <AppData />
     <Avatar />
     <Text />
     <Todo />
     <Time />
     <Checkboxes />
     <SimpleFetch />
     <Countries />
    <Algolia />
     < JokeWithHooks /> */}
     <CancelRequest />
     {/* <EditingFocus />
     <PlayPause />
     <ImageToogle /> */}

  </React.StrictMode>,
  document.getElementById('root')
);
