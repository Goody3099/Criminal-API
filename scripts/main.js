console.log("Good morning, Main.js");

import {OfficerList} from './officers/officerList.js';
import {criminalList} from './criminals/criminalList.js'
import { ConvictionSelect } from './convictions/convictionSelect.js';
import { getConvictions } from './convictions/convictionProvider.js';
import { OfficerSelect } from './officers/OfficerSelect.js';
import { NoteForm } from './notes/noteForm.js';
import { useWitness } from './witness/witnessProvider.js';
import { witnessList } from './witness/witnessList.js';
import { WitnessSelect } from './witness/witnessSelect.js';


NoteForm();
criminalList();
ConvictionSelect();
OfficerSelect();
useWitness();
witnessList();
WitnessSelect();