import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import { img_500 } from "../Assets/Img/Img";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Button } from "@material-ui/core";
import "./movieModal.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "80%",
    height: "80%",
    backgroundColor: "#22254b",
    border: "2px solid #373b69",
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 1),
  },
}));

export default function MovieModal({ children, media_type, id }, ...data) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=2b7d819095d4001352de4aa47e90ebc2&language=en-US`
    );
    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=2b7d819095d4001352de4aa47e90ebc2&language=en-US`
    );
    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
  }, []);

  return (
    <>
      <div
        className="movies-list"
        style={{cursor: "pointer"}}
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
            <div className={classes.paper}>
              <div className="modal-content">
                <div>
                <img
                  alt={content.name || content.title}
                  className="modal-poster"
                  src={content.poster_path
                    ? `${img_500}/${content.poster_path}`
                    : 'unavalable'
                  }
                />
                <img
                  className="modal-landscape"
                  src={content.backdrop_path
                    ? `${img_500}/${content.backdrop_path}`
                    : 'unavailableLandscape'
                  }
                />
                </div>
                <div className="modal-description">
                  <span className="modal-title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "------"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}
                  <span className="description">{content.overview}</span>
                  <div></div>
                  <Button
                    variant="contained"
                    // starIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </>
  );
}
