import React from "react";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function PortfolioCard2({ title, description, moreInfoLink }) {
  return (
    <div style={{ textAlign: "center", margin: "10px 0" }}>
      {moreInfoLink && (
        <Button
          variant="primary"
          href={moreInfoLink}
          target="_blank"
          style={{ marginTop: "10px" }}
        >
          <CgWebsite /> &nbsp;
          {"Click for More"}
        </Button>
      )}
    </div>
  );
}

export default PortfolioCard2;