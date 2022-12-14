import { renderPhotos } from './pictures.js';
import {uploadForm} from './formUpload.js';
import {setData} from './fetch.js';
import {showUnloadingErrorMessage} from './utils.js';

setData(renderPhotos,
  () => {
    showUnloadingErrorMessage('Не удалось загрузить данные из сервера :(');
  },
  'GET');

uploadForm();
