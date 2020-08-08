class TestObjectLib {

    static getReqAttrAndTypes(){
        return {"test_attribute": "number"}
    }


    static async create(test_attribute) {
        // verify parameters and create data to send to the route
        const arrayOfAttributes = 'test_attribute'.split(',');
        let routeGroupObj = {};
        for (let i = 0; i < arguments.length; i++) {
            if (
                typeof arguments[i] !==
                TestObjectLib.getReqAttrAndTypes()[arrayOfAttributes[i]]
            ) {
                throw `${arrayOfAttributes[i]} expects ${TestObjectLib.getReqAttrAndTypes()[arrayOfAttributes[i]]}, but recieved ${typeof arguments[i]}`;
            }
            routeGroupObj[arrayOfAttributes[i]] = arguments[i];
        }
        // Create and set id property to 0, currently required for the route
        routeGroupObj.appToken = "63861a80-40b8-45ab-b27e-bd2f8439d75b";

        // request to server
        let resStream = await fetch(`/createTestObject`, {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(routeGroupObj),
        })
        .catch((err) => {
            console.log('Error:', err)
            return false;
        });

        let res = await resStream.json();

        return {
            createdObj: res,
            status: resStream.status === 200
        };
    }


    static async read(attributes_dict){
        for (const [attr_name, attr_val] of Object.entries(attributes_dict)) {
            if (typeof attr_val !== TestObjectLib.getReqAttrAndTypes()[attr_name]) {
                throw "Bad Params! [Attribute Type Error]";
            }
        }
        let result_stream = await fetch(`/readTestObject`, {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify("appToken":"63861a80-40b8-45ab-b27e-bd2f8439d75b", "filters":attributes_dict)
        })
        .catch((err) => {
            console.log('Error: ', err);
            return false;
        });
        let res = await result_stream.json();

        return {
            readedObj:res,
            status:result_stream.status === 200
        };
    }


    static async update(id, attributes_dict) {
        for (const [attr_name, attr_val] of Object.entries(attributes_dict)) {
            if(!TestObjectLib.getReqAttrAndTypes()[attr_name])
                throw `${attr_name} is not an attribute of TestObject`;

            if (typeof attr_val !== TestObjectLib.getReqAttrAndTypes()[attr_name]) {
                throw `[Attribute Type Error] ${attr_name} expected ${TestObjectLib.getReqAttrAndTypes()[attr_name]}, but received ${typeof attr_val}`;
            }
        }
        const updateAttributes = {};
        updateAttributes["id"] = id;
        updateAttributes["data"] = attributes_dict
        attributes_dict.appToken = "63861a80-40b8-45ab-b27e-bd2f8439d75b";
        let result_stream = await fetch(`/updateTestObject`, {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(updateAttributes)
        })
        .catch((err) => {
            console.log('Error: ', err);
            return false;
        });
        return result_stream.status === 200;
    }


    static async delete(id){
        if(typeof(id) !== "number") throw `[Attribute Type Error] ID expected of type 'number', but received of type ${typeof id}`;

        let resStream = await fetch(`/deleteTestObject`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id, appToken:"63861a80-40b8-45ab-b27e-bd2f8439d75b"})
        })
        .catch((err) => {
            console.log('Error: ', err);
            return false;
        });
        return resStream.status===200;
    }

}
