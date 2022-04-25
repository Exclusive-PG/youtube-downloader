const express = require("express")
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();

const PORT = process.env.PORT || 3500;
const name = "video";

app.use(cors());

app.listen(PORT,  () => {
	console.log(`Server is working at port ${PORT}`);
});

app.get("/download",async (req, res) => {

try{
	const URL = req.query.URL;
	// res.status(200).json({ url: URL });
    let info = await ytdl.getInfo(URL);


	res.header('Content-Disposition', `attachment; filename=${encodeURI(info.videoDetails.title)}.mp4`);
   
   
	ytdl(URL, {
		format: "mp4",
	}).pipe(res);
}catch(e){
	console.log(e)
}
});
