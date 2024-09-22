import { Layout } from "@components";
import { ImagesModal } from "@components";
import { AddNote } from "@pages/CreateNote/components";

const CreateNote: React.FC = () => {
  return (
    <Layout>
      <AddNote />
      <ImagesModal />
    </Layout>
  );
};

export default CreateNote;
