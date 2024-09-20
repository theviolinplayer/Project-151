AFRAME.registerComponent("move", {
    schema:{
        axis_x:{type:"number", default:1}
    },
    tick:function(){
        this.data.axis_x+=0.01
        var p = this.el.getAttribute("position")
        p.x=this.data.axis_x
        this.el.setAttribute("position", {x:p.x, y:p.y, z:p.z})
    }
})