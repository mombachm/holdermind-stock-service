import app from "./App";
const PORT = process.env.PORT || 4000;

app.removeAllListeners();
app.listen(PORT, async () => {
  console.log("Express server listening on port " + PORT);
});
