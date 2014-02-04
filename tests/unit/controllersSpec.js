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
	});
});