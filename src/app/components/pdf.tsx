"use client";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Phone, Mail, MapPin, Globe, Dot } from "lucide-react";
import { useState } from "react";

export default function TemplatePDF() {
  const styles = StyleSheet.create({
    view1: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    name: {
      fontSize: 18,
      lineHeight: 28,
      color: " #000000",
      fontWeight: 700,
      marginLeft: 20,
    },
    designation: {
      marginLeft: 20,
      color: "#111827",
      fontSize: 12,
      lineHeight: 16,
    },
    Div2: {
      display: "flex",
    },
    Div3: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: 16,
      width: 32,
      height: 96,
    },
    contact: {
      fontSize: 12,
      lineHeight: 16,
      color: "#000000",
      fontWeight: 600,
    },
    view2a: {
      marginTop: 8,
      marginBottom: 8,
    },
    view2a1: {
      display: "flex",
      marginBottom: 4,
    },
    View2a1_Text1: {
      color: " #000000",
      fontSize: 8,
      lineHeight: 14,
    },
    View2a2: {
      display: "flex",
      marginTop: 4,
      marginBottom: 4,
    },
    View2a2_Text1: {
      color: "#000000",
      fontSize: 8,
      lineHeight: 14,
    },
    View2a3: {
      display: "flex",
      marginTop: 4,
      marginBottom: 4,

    },
    View2a3_Text1: {
      color: "#000000",
      fontSize: 8,
      lineHeight: 14,
    },
    View2a4: {
      display: "flex",
    },
    View2a4_Text1: {
      color: "#000000",
      fontSize: 8,
      lineHeight: 14,
    },
    View3: {
      marginTop: 24,
      marginBottom: 24,
    },
    View3_Text1: {
      color: " #000000 ",
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 600,
    },
    View3a: {
      paddingTop: 8,
      paddingBottom: 8,
    },
    View3a_Text1: {
      fontSize: 8,
      lineHeight: 14,
      fontWeight: 700,
      color: " #000000",
    },
    View3a_Text2: {
      fontSize: 8,
      lineHeight: 14,
      color: " #000000",
    },
    View3a_Text3: {
      fontSize: 8,
      lineHeight: 14,
      color: " #000000",
    },
    View4_Text1: {
      paddingTop: 8,
      paddingBottom: 8,
      color: " #000000",
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 600,
    },
    View4a: {
      display: "flex",
    },
    View4a_Text1: {
      fontSize: 8,
      lineHeight: 14,
      color: " #000000",
    },
    CenterLine: {
      borderWidth: 1,
      borderColor: "#9ca3af",
      height: 320,
    },
    Div5: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: 16,
      width: 224,
    },
    View5_Text1: {
      color: " #000000",
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 600,
    },
    View5_Text2: {
      color: "#111827",
      fontSize: 8,
      lineHeight: 14,
      marginRight: 24,
      paddingTop: 8,
      paddingBottom: 8,
    },
    View6_Text1: {
      color: " #000000",
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 600,
      paddingTop: 12,
      paddingBottom: 12,
    },
    View6_Text2: {
      color: "#111827",
      fontSize: 8,
      lineHeight: 14,
    },
    View6_Text3: {
      color: "#111827",
      fontSize: 8,
      lineHeight: 14,
      fontWeight: 700,
    },
    View6_Text4: {
      color: "#111827",
      fontSize: 8,
      lineHeight: 14,
    },

  });

  const [name, setName] = useState("JEFF BEZOS");
  const [designation, setDesignation] = useState("MERN Stack Developer");
  const [phone, setPhone] = useState("+92 34567890");
  const [email, setEmail] = useState("jeff123@gmail.com");
  const [address, setAddress] = useState(" 12 ST, CHICAGO");
  const [portfolio, setPortfolio] = useState("www.jeff.com");
  const [education, setEducation] = useState("Bs in Robotics");
  const [educationYear, setEducationYear] = useState("2020-2024");
  const [skills, setSkills] = useState("Programing");
  const [profile, setProfile] = useState(
    "I am jeff bezos i started my kiryana store"
  );
  const [experience, setExperience] = useState("real state agent");
  const [experienceCompany, setExperienceCompany] = useState("ABC Builders");
  const [experienceYear, setExperienceYear] = useState("2015 - present");

  return (
    <Document>
      <Page>
        // Div1
        /*View1*/ /* Name */
        <View style={styles.view1}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.designation}> {designation}</Text>
        </View>
        // Div2
        <View  style={styles.Div2}>
          // Div3
        <View style={styles.Div3}>
        // View2 
        // Contact Details
        <View>
          <Text style={styles.contact}>CONTACT</Text>
          //View 2a 
          <View style={styles.view2a}>
            //View 2a1
            <View style={styles.view2a1}>
              <Phone className=" text-black mr-1" size={10} />
            //View2a1 text1

              <Text style={styles.View2a1_Text1}> {phone}</Text>
            </View>
            //View 2a2
            <View style={styles.View2a2}>
              <Mail className=" text-black mr-1 " size={10} />
            //View2a2 text1

              <Text style={styles.View2a2_Text1}> {email}</Text>
            </View>
            //View 2a3
            <View style={styles.View2a3}>
              <MapPin className=" text-black mr-1 " size={10} />
            //View2a3 text1

              <Text style={styles.View2a3_Text1} > {address}</Text>
            </View>
            //View 2a4
            <View style={styles.View2a4}>
              <Globe className=" text-black mr-1 " size={10} />
            //View2a4 text1

              <Text style={styles.View2a4_Text1}>{portfolio}</Text>
            </View>
          </View>
        </View>
        // View3 
        // Education Details 
        <View style={styles.View3}>
          // View3 text1
          <Text style={styles.View3_Text1}>EDUCATION</Text>
          // View 3a 
          <View style={styles.View3a}>
            // View3a text1
            <Text style={styles.View3a_Text1}>Graduation</Text>
            // View3a text2
            <Text style={styles.View3a_Text2}>{education}</Text>
            // View3a text3
            <Text style={styles.View3a_Text3}>{educationYear}</Text>
          </View>
        </View>
        // View4  
        // Skills Details 
        <View>
          // View4 text1
          <Text style={styles.View4_Text1}>SKILLS</Text>
          // View 4a 
          <View style={styles.View4a}>           
            <Dot className=" text-black " size={10} />
            // View4a text1 
            <Text style={styles.View4a_Text1}>{skills}</Text>
          </View>
        </View>
        </View>


        // div4
        // centerLine
         <View style={styles.CenterLine} ></View>
         // div5
       <View style={styles.Div5}>

        // View5
        <View>
        // View5 text1
     <Text style={styles.View5_Text1}>
       PROFILE
     </Text>
     // View5 text2

     <Text style={styles.View5_Text2} >
       {profile}
     </Text>
   </View>
   // View6
   <View>
   // View6 text1

    <Text style={styles.View6_Text1} >
       WORK EXPERIENCE
     </Text>
   // View6 text2

     <Text style={styles.View6_Text2} >{experience}</Text>
   // View6 text3

     <Text style={styles.View6_Text3} >
       {experienceCompany}
    </Text>
   // View6 text4

     <Text style={styles.View6_Text4}>{experienceYear}</Text>
   </View>
   </View>
   </View>

      </Page>
    </Document>
  );
}

// <Document>
// <Page>
//<View >
// <View className=" my-10">
// <Text className=" text-lg text-black font-bold ml-5 ">{name}</Text>
// <Text className=" ml-5 text-gray-900 subHeading ">
//   {designation}
// </Text>
// </View>
 //<View className=" flex">
//<View className=" flex flex-col pl-4 left w-32 h-96">
//   <View className=" contact">
//     <Text className=" subHeading text-black  font-semibold ">
//       CONTACT
//     </Text>
//     <View className=" my-2">
//       <View className=" flex mb-1">
//         <Phone className=" text-black mr-1" size={10} />
//         <Text className=" sectionHeading text-black"> {phone}</Text>
//       </View>
//       <View className=" flex my-1">
//         <Mail className=" text-black mr-1 " size={10} />
//         <Text className=" sectionHeading text-black">
//           {" "}
//           {email}
//         </Text>
//       </View>
//       <View className=" flex my-1">
//         <MapPin className=" text-black mr-1 " size={10} />
//         <Text className=" sectionHeading text-black">
//           {" "}
//           {address}
//         </Text>
//       </View>
//       <View className=" flex">
//         <Globe className=" text-black mr-1 " size={10} />
//         <Text className=" sectionHeading text-black">{portfolio}</Text>
//       </View>
//     </View>
//   </View>
//   <View className=" education my-6">
//     <Text className=" text-black subHeading font-semibold">
//       EDUCATION
//     </Text>

//     <View className=" py-2 ">
//       <Text className=" sectionHeading text-black font-bold ">
//         Graduation
//       </Text>
//       <Text className=" sectionHeading text-black ">{education}</Text>
//       <Text className=" sectionHeading text-black ">
//         {educationYear}
//       </Text>
//     </View>
//   </View>
//   <View className="  skills">
//     <Text className=" py-2 text-black subHeading font-semibold">
//       SKILLS
//     </Text>
//     <View className="  flex">
//       <Dot className=" text-black " size={10} />
//       <Text className=" sectionHeading text-black">
//         {skills}
//       </Text>
//     </View>
//   </View>
// </View>{" "}
// <View className=" centerLine border border-gray-400 h-80"></View>
// <View className=" right flex flex-col pl-4 w-56">
//   <View>
//     <Text className=" text-black subHeading font-semibold">
//       PROFILE
//     </Text>
//     <Text className=" py-2 mr-6 sectionHeading text-gray-900">
//       {profile}
//     </Text>
//   </View>
   // <View>
//     <Text className="text-black subHeading font-semibold py-3">
//       WORK EXPERIENCE
//     </Text>
//     <Text className="sectionHeading text-gray-900">{experience}</Text>
//     <Text className=" sectionHeading text-black font-bold">
//       {experienceCompany}
//     </Text>
//     <Text className="sectionHeading text-gray-900">{experienceYear}</Text>
//   </View>
// </View>
// </View> 
// </View>
// </Page>
// </Document>
