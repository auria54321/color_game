class ShapeFactoy(object):
	def get_shape(self, shape_type):
		if not shape_type:
			return
		if shape_type == 'Circle':
			return Circle()
		elif shape_type == 'Triangle':
			return Triangle()
		elif shape_type == 'Square':
			return Square()
		else:
			return

class Shape(object):
	def draw(self):
		print 'Draw Shape'

class Circle(Shape):
	def draw(self):
		print 'Draw Circle'

class Triangle(Shape):
	def draw(self):
		print 'Draw Triangle'

class Square(Shape):
	def draw(self):
		print 'Draw Square'

class FactoryPatternDemo(object):
	@classmethod
	def main(cls):
		shape_factory = ShapeFactoy()
		shape_a = shape_factory.get_shape('Circle')
		shape_a.draw()
		shape_b = shape_factory.get_shape('Triangle')
		shape_b.draw()
		shape_c = shape_factory.get_shape('Square')
		shape_c.draw()

