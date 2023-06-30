const stackCodes = [
  {
    name: "React",
    code: `
  import { createClient } from "@uploadfly/react";

  const uploadfly = createClient({
    apiKey: "pk_******************************",
  });
  
  const upload = async () => {
    try {
      const data = await uploadfly.upload(file);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
    `,
  },
  {
    name: "JavaScript",
    code: `
<script src="https://js.upload.io/fly-js/v1"></script>

<script>
  const uploadfly = createClient({
    apiKey: "pk_******************************",
    //optional
  });

  const upload = async () => {
    try {
      const data = await uploadfly.upload(file);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
</script>

    `,
  },
];

export { stackCodes };
