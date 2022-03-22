import React, { useState, useEffect } from "react";
import Main from "./component/Pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Privacy from "./component/Pages/privacy";
import Categories from './component/cardinfo/Categories';
import CatNavbar from './component/container/CatNavbar';

function App() {
  
  const [data, setdata] = useState([]);

  const getapi = () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(`http://theheadlines.co.in/admin/api/blog-category-list`, options)
      .then((res) => res.json())
      .then((resp) => {
        // console.log("your category data =>" + JSON.stringify(resp.data));
        setdata(resp.data);
      })
      .catch((error) => {
        console.log("Error is =>" + error);
      });
  };

  useEffect(() => {
    getapi();
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor:'lightgray'
      }}
    >
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path={`/categories/:id`} element={<CatNavbar />} />
          <Route exact path="/privacy" element={<Privacy />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App


{
  /* <Main /> */
}

{
  /* <form onSubmit={this.handleSubmit}>
          {this.state.Business.map((item) => (
            <label>
              <input
                type="checkbox"
                value={item.id}
                onChange={this.handleChange}
              />
              {item.type}
            </label>
          ))}
          <br />
          <button type="submit">Submit</button>
        </form> */
}

// constructor(props) {
//   super(props);

//   this.state = {
//     Business: [
//       { id: 1, type: "Grocery" },
//       { id: 2, type: "Pharmancy" },
//       { id: 3, type: "Package" },
//       { id: 4, type: "Demo" }
//     ],
//     checkedItems: new Map()
//   };

//   this.handleChange = this.handleChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);
// }

// handleChange(event) {

//   var isChecked = event.target.checked;
//   var item = event.target.value;

//   this.setState((prevState) => ({
//     checkedItems: prevState.checkedItems.set(item, isChecked)
//   }));
// }

// handleSubmit(event) {
//   console.log(this.state);
//   event.preventDefault();
// }

// const [Selectedvalue, setSelectedvalue] = useState([]);
// const [userdata, setuserdata] = useState([]);
// const [display,setdisplay] = useState(false)
// const [business_type, setbusiness_type] = "";
// const [drug_licence, setdrug_licence] = useState("");

// const {
//   register,
//   handleSubmit,
//   control,
//   formState: { errors }
// } = useForm();

// useEffect(() => {
//   getbusiness();
// }, []);

// var newArray = [];
// const getbusiness = () => {
//   console.log("here");
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };
//   fetch("https://node-dot-redeecom.uc.r.appspot.com/apigetbusiness", options)
//     .then((res) => res.json())
//     .then((resp) => {
//       newArray = resp.data.map(function(item){
//         return {
//             "value": item.id,
//             "label": item.type,
//         }
//     })
//     console.log("here"+JSON.stringify(newArray));
//       setuserdata(newArray);
//     });
// };

// const handlecategorychange = (value) => {
//   setSelectedvalue(value);
// };

// const onSubmit = async (e) => {
//   e.preventDefault();

//   let result = fetch(
//     "https://node-dot-redeecom.uc.r.appspot.com/Apiaddvendor",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         business_type: business_type
//       })
//     }
//   )
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((result) => {
//       if (result.status == true) {
//         window.alert("data is send");
//       } else {
//         window.alert(result.message);
//       }
//     })
//     .catch((err) => {
//       console.log("Error Reading data " + err);
//     });
// };

{
  /* <Form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            marginTop: "10%",
            width: "50%",
            marginLeft: "15%"
          }}
        >
          <Form.Field>
            <Controller
              control={control}
              defaultValue={userdata.map((c) => c.value)}
              name="business_type"
              render={({ field: { onChange, value, ref } }) => (
                <Select
                  inputRef={ref}
                  value={userdata.filter((c) => value.includes(c.value))}
                  {...register("business_type", { required: true })}
                  onChange={(val) =>{ onChange(val.map((c) => c.value));
                  val.map((c) => c.label) == 'pharmancy' ? setSelectedvalue(true) :setSelectedvalue(false) }}
                  options={userdata}
                  isMulti
                />
                )}
            />
            {errors.business_type && (
              <p
                style={{
                  borderRadius: "3%",
                  color: "crimson",
                  textAlign: "center"
                }}
              >
                Business Type is Required
              </p>
            )}
          </Form.Field>

          <Form.Field>
            {Selectedvalue == true && <>
                      <label>
                        <b>Drug License Number</b>
                      </label>
                      <div className="mb-3 pt-1">
                        <input
                          type="number"
                          required
                          value={drug_licence}
                          onChange={(e) => setdrug_licence(e.target.value)}
                          className="form-control"
                          autoComplete="off"
                          id="exampleFormControlInput1"
                          placeholder="Drug License Number"
                        />
                      </div>
                    </>
                  
                }
            
          </Form.Field>
        </div>

        <Button type="submit" className="btn btn-success">
          Submit
        </Button>
      </Form> */
}