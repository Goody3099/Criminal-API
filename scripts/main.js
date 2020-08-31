console.log("Good morning, Main.js");

import {OfficerList} from './officers/officerList.js';
import {criminalList} from './criminals/criminalList.js'
import { convictionSelect } from './convictions/convictionSelect.js';
import { getConvictions } from './convictions/convictionProvider.js';


OfficerList();
criminalList();
getConvictions()
.then(_=>convictionSelect());