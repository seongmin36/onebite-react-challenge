import "./EmotionItem.css";
import getEmotionImage from "../util/get-emotion-image.js";

const EmotionItem = ({ emotionId, emotionName, isSelected }) => {
  return (
    <div
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}
    >
      <img className="emotion_img" src={getEmotionImage(emotionId)} />
      <span className="emotion_name">{emotionName}</span>
    </div>
  );
};

export default EmotionItem;
