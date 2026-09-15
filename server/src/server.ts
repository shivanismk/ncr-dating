import app from "./app";
// import stateRoutes from "./routes/state.routes";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

