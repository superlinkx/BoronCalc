describe('BoronCalc controllers', function() {
	beforeEach(module('boroncalc'));
	
	describe('LifeCounterCtrl', function() {
		var ctrl, scope;

		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			ctrl = $controller('LifeCounterCtrl', { $scope: scope });
		}));
		
		it('should set life model to 20', function() {
			expect(scope.life).toBe(20);
		});
		
		it('should set poison model to 0', function() {
			expect(scope.poison).toBe(0);
		});

		it('should add 1 to life through changeLife method'), function() {
			var oldLife = scope.life;
			scope.changeLife(1);
			expect(scope.life).toBe(oldLife+1);
		}

		it('should minus 5 from life through changeLife method'), function() {
			var oldLife = scope.life;
			scope.changeLife(-5);
			expect(scope.life).toBe(oldLife-5);
		}

		it('should minus 1 from poison through changePoison method'), function() {
			var oldpoison = scope.poison;
			scope.changePoison(-1);
			expect(scope.poison).toBe(oldpoison-1);
		}

		it('should add 5 to poison through changePoison method'), function() {
			var oldpoison = scope.poison;
			scope.changePoison(5);
			expect(scope.poison).toBe(oldpoison+5);
		}
	});
});