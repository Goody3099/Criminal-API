console.log("Good morning, Main.js");

import {OfficerList} from './officers/officerList.js';
import {criminalList} from './criminals/criminalList.js'
import { ConvictionSelect } from './convictions/convictionSelect.js';
import { getConvictions } from './convictions/convictionProvider.js';
import { OfficerSelect } from './officers/OfficerSelect.js';


// OfficerList();
 criminalList();
// getConvictions()
// .then(_=>convictionSelect());

ConvictionSelect();
OfficerSelect();