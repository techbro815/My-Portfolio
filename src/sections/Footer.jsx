import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      {/* Terms and Privacy */}
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      {/* Social Icons with Matching Backgrounds & Effects */}
      <div className="flex gap-5">
        {/* GitHub */}
        <a href="https://github.com/techbro815" target="_blank" rel="noopener noreferrer">
          <motion.div
            className="social-icon p-3 rounded-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 border-2 border-gray-600 border-opacity-50 flex justify-center items-center"
            whileHover={{ scale: 1.15, boxShadow: '0px 0px 10px rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.9 }}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <img src="/assets/github.svg" alt="GitHub" className="w-7 h-7" />
          </motion.div>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/sujal-thakur-317257287/" target="_blank" rel="noopener noreferrer">
          <motion.div
            className="social-icon p-3 rounded-full bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 border-2 border-blue-400 border-opacity-50 flex justify-center items-center"
            whileHover={{ scale: 1.15, boxShadow: '0px 0px 10px rgba(59,130,246,0.5)' }}
            whileTap={{ scale: 0.9 }}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <img src="/assets/twitter.svg" alt="LinkedIn" className="w-7 h-7" />
          </motion.div>
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/jimbro_815/" target="_blank" rel="noopener noreferrer">
          <motion.div
            className="social-icon p-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 border-2 border-red-400 border-opacity-50 flex justify-center items-center"
            whileHover={{ scale: 1.15, boxShadow: '0px 0px 10px rgba(255,48,108,0.5)' }}
            whileTap={{ scale: 0.9 }}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <img src="/assets/instagram.svg" alt="Instagram" className="w-7 h-7" />
          </motion.div>
        </a>
      </div>

      {/* Copyright */}
      <p className="text-white-500">© 2025 Sujal Thakur. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
