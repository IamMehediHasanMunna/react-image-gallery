/**
 * Title: JavaScript on DragDropOverlay
 * Author: Mehedi Hasan Munna
 * Date: 04, November 2023
 */

import React from "react";

const DragDropOverlay = ({ dragging, draggedIndex, image }) => {
  return (
    dragging &&
    Number(draggedIndex) === Number(image.id) && (
      <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-white border-2 rounded-lg z-50"></div>
    )
  );
};

export default DragDropOverlay;
