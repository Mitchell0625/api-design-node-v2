import express from "express";
import playlistController from "./playlist.controller";

export const playlistRouter = express.Router();

playlistRouter
  .route("/")
  .get(playlistController.getAll)
  .post(playlistController.createPlaylist);

playlistRouter
  .route("/:id")
  .get(playlistController.getUserPlaylists)
  .put(playlistController.updatePlaylist)
  .delete(playlistController.deletePlaylist);
