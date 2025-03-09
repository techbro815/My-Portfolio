import { achievements } from '../constants/index.js';

const Achievements = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">My Achievements</h3>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
        {achievements.map((achievement) => (
          <div
            key={`achievement-${achievement.id}`}
            className="achievement-card flex flex-col justify-between h-auto p-6 bg-gray-900 rounded-lg shadow-lg">
            {/* Title & Description */}
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-white">{achievement.title}</h4>
              <p className="text-white-500 text-sm font-light mt-2 leading-relaxed">{achievement.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {achievement.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 text-xs bg-gray-800 text-white rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Image Section - Improved Scaling */}
            <div className="w-full flex items-center justify-center bg-black rounded-lg mt-6">
              <img
                src={achievement.img}
                alt={achievement.title}
                className={`achievement-img-${achievement.id} rounded-lg`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
