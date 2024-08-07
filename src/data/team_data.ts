import team_avatar_1 from "@/assets/img/team/Team_1.png";
import team_avatar_2 from "@/assets/img/team/Team_2.png";
import team_avatar_3 from "@/assets/img//team/Team_3.png";
import team_avatar_4 from "@/assets/img/team/Team_4.png";
import team_avatar_5 from "@/assets/img/team/Team_5.png";
import team_avatar_6 from "@/assets/img/teamsimg6.jpg";
import team_avatar_7 from "@/assets/img/teamsimg7.jpg";
import team_avatar_8 from "@/assets/img/teamsimg8.jpg";

import { StaticImageData } from "next/image";


interface DataType {
	id: number;
	img: StaticImageData;
	avatar_name: string;
	designation: string;
}

const team_data: DataType[] = [
	{
		id: 1,
		img: team_avatar_1,
		avatar_name: "Adithya Vishnu",
		designation: "Chief Executive Officer",
	},
	{
		id: 2,
		img: team_avatar_2,
		avatar_name: "Ashin Amanulla",
		designation: "Chief Technology Officer",
	},
	{
		id: 3,
		img: team_avatar_3,
		avatar_name: "Afsal E",
		designation: "Chief Business Officer",
	},
	{
		id: 4,
		img: team_avatar_4,
		avatar_name: "Ramees",
		designation: "Chief Marketing Officer",
	},
	{
		id: 5,
		img: team_avatar_5,
		avatar_name: "Dhilraj Soza",
		designation: "Chief Stratagy Officer",
	},
	// team data
	
];

export default team_data;
