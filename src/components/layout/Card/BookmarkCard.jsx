import React from "react";
import PropTypes from "prop-types";
import Card from "./index";

const { exec } = window.require("child_process");

const openUrl = url => {
  exec(`xdg-open ${url}`);
};

const BookmarkCard = ({ title, url, content, dateAdded }) => (
  <Card title={title}>
    <p>{url}</p>
    <p>Added on {dateAdded}</p>
    {content && <p>{content}</p>}
    <button onClick={() => openUrl(url)}>Open</button>
  </Card>
);

BookmarkCard.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
  content: PropTypes.string,
  dateAdded: PropTypes.string.isRequired,
};

BookmarkCard.defaultProps = {
  title: "Untitled Bookmark",
  content: "",
};

export default BookmarkCard;
