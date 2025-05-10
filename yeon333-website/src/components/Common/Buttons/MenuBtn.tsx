import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const MenuBtn = ({ isOpen, toggle }: Props) => {
  return (
    <Button onClick={toggle}>
      {[0, 1, 2].map((i) => (
        <Line
          key={i}
          custom={i}
          animate={isOpen ? 'open' : 'closed'}
          variants={lineVariants}
        />
      ))}
    </Button>
  );
};

export default MenuBtn;

const Button = styled.div`
  width: 3rem;
  height: 2.4rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const Line = styled(motion.div)`
  height: 2px;
  width: 100%;
  background-color: #fff;
  border-radius: 1px;
`;

const lineVariants = {
  closed: () => ({
    rotate: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  }),
  open: (i: number) => {
    switch (i) {
      case 0:
        return { rotate: 45, y: 12, transition: { duration: 0.3 } };
      case 1:
        return { opacity: 0, transition: { duration: 0.3 } };
      case 2:
        return { rotate: -45, y: -10, transition: { duration: 0.3 } };
      default:
        return {};
    }
  },
};
