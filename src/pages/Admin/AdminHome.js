import React from "react";
import Layout from "../../components/shared/Layout/Layout";

const AdminHome = () => {
  const role = localStorage.getItem("role");
  let r;
  if (role) {
    r = role;
  }
  return (
    <Layout>
      <div className="container pt-10">
        <div className="d-flex flex-column lg:text-3xl">
          <h1>
            Welcome Admin <i className="text-success">{r}</i>
          </h1>
          <h3 className="pt-6">Manage Blood Bank App</h3>
          <p className="lg:text-2xl pt-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur quibusdam natus odit, neque minus nobis amet suscipit
            repudiandae in voluptatibus. Quis explicabo animi esse eius alias
            repellendus corrupti porro in, accusantium, necessitatibus
            doloribus. Tenetur sunt ad libero, asperiores illo iste eum quos
            praesentium eveniet cum laborum distinctio, mollitia similique!
            Quibusdam atque repellendus consequuntur at, quos vero totam unde
            dolor id officiis suscipit excepturi, nam tempora obcaecati
            accusamus ipsam autem ex eveniet quidem dolorem. Ad, earum
            reiciendis enim minima dignissimos beatae aut cum ea asperiores
            voluptas necessitatibus at quibusdam provident. Asperiores magni
            aperiam ea error harum, cum, in officiis consequatur porro adipisci
            nobis molestiae. Eveniet, omnis iusto? Qui commodi distinctio
            laboriosam maiores libero ipsa, autem et? Sequi voluptates deleniti
            quaerat quos a excepturi vero quia dignissimos accusantium omnis
            quas assumenda laudantium, alias illum nisi aspernatur magni
            expedita quod? Quaerat nisi soluta officia necessitatibus sit
            sapiente ab natus provident asperiores, exercitationem magnam, aut
            quisquam, odio tenetur sint error harum delectus repudiandae nobis
            minus! Error dolorum cupiditate nisi ex facere placeat ipsam
            repellat? Minus dolorem suscipit magnam vero dignissimos consectetur
            impedit itaque quibusdam eos, atque ratione laborum repellat quis
            fuga deserunt voluptate inventore eaque, porro voluptatum. Quam
            minus consequatur veniam, dicta quidem voluptates!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
