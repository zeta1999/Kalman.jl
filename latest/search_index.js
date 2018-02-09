var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Kalman.jl-1",
    "page": "Home",
    "title": "Kalman.jl",
    "category": "section",
    "text": "A Julia package for fast, flexible filtering and smoothing."
},

{
    "location": "library.html#",
    "page": "Library",
    "title": "Library",
    "category": "page",
    "text": ""
},

{
    "location": "library.html#Library-1",
    "page": "Library",
    "title": "Library",
    "category": "section",
    "text": ""
},

{
    "location": "library.html#Kalman.LinearHomogSystem",
    "page": "Library",
    "title": "Kalman.LinearHomogSystem",
    "category": "Type",
    "text": "LinearHomogSystem <: StateSpaceModel\n\nLinearHomogSystem(x0, P0, Phi, b, Q, y, H, R)\n\nTime homogeneous linear dynamical model with linear observation scheme corresponding to\n\n$ x[k] = Φx[k−1] + b + w[k],    w[k] ∼ N(0, Q) $\n\n$ y[k] = Hx[k] + v[k],    v[k] ∼ N(0, R) $\n\nThe argument y to the constructor is a dummy variable with the same type and size  as the observations.\n\nExample\n\nx0 = [1., 0.]\nP0 = eye(2)\n\nPhi = [0.8 0.2; 0.0 0.8]\nb = zeros(2)\nQ = [0.1 0.0; 0.0 1.0]\n\ny = [NaN]\nH = [1.0 0.0]\nR = eye(1)\nM = LinearHomogSystem(x0, P0, Phi, b, Q, y, H, R)\n\n\n\n"
},

{
    "location": "library.html#StatsBase.sample",
    "page": "Library",
    "title": "StatsBase.sample",
    "category": "Function",
    "text": "Y, X = sample(n, m, M::LinearHomogSystem) \n\nSample observations generated by M.\n\nn – number of observations per simulation\nm – number of independent simulations\nM – linear dynamic system and observation model\nY – observations (d2xnxm array)\nX – simulated processes (dxnxm array)\n\n\n\n"
},

{
    "location": "library.html#Linear-systems-1",
    "page": "Library",
    "title": "Linear systems",
    "category": "section",
    "text": "Kalman.LinearHomogSystem\nStatsBase.sample"
},

{
    "location": "library.html#Kalman.kalmanfilter",
    "page": "Library",
    "title": "Kalman.kalmanfilter",
    "category": "Function",
    "text": "ll, xxf = kalmanfilter(yy::Matrix, M::LinearHomogSystem)\n\nKalman filter\n\nyy -- d₂xn array\nM -- linear model\nll -- marginal likelihood\nxxf -- filtered process\n\n\n\nll, X = kalmanfilter{T}(Y::Array{T,3}, M::LinearHomogSystem)\n\nStack Kalman filter\n\nY -- array of m independent processes (dxnxm array)\n\nX -- filtered processes (dxnxm array)\nll -- product marginal log likelihood\n\n\n\n"
},

{
    "location": "library.html#Kalman.observe!",
    "page": "Library",
    "title": "Kalman.observe!",
    "category": "Function",
    "text": "observe!(s, x, P, t, y, M) -> t, y, H, R\n\nObtain observation time t, observation y, observation matrix H and observation covariance H using model M. Except for certain use cases this is  a no-op on arguments t and y (but needs to return t and y nevertheless.)\n\n\n\n"
},

{
    "location": "library.html#Kalman.predict!",
    "page": "Library",
    "title": "Kalman.predict!",
    "category": "Function",
    "text": "predict!(s, x, P, t, M) -> x, Ppred, Phi\n\nComputes predicted state x and predicted covariance of model M according  the prediction equations\n\nP_pred = Phi P Phi + Q\n\nAlso returns evolution operator / Jacobian Phi.\n\n\n\n"
},

{
    "location": "library.html#Kalman.correct!",
    "page": "Library",
    "title": "Kalman.correct!",
    "category": "Function",
    "text": "correct!(x, Ppred, y, H, R, M) -> x, P, yres, S, K\n\nPerform the Kalman correction step using state space model M. Inputs are predicted state x and predicted covariance, as well as observation y and observation matrix H, observation covariance R.\n\nOutputs filtered state x, filtered state covariance P, residual y as well as innovation covariance S and Kalman gain K.\n\n\n\n"
},

{
    "location": "library.html#Kalman.evolve",
    "page": "Library",
    "title": "Kalman.evolve",
    "category": "Function",
    "text": "evolve(s, x, P, t, M) -> x\n\nEvolve state x according to the state dynamics of model M without noise, usually \n\n$ x \\mapsto \\Phi x + b. $\n\n\n\n"
},

{
    "location": "library.html#Kalman.kalman_kernel",
    "page": "Library",
    "title": "Kalman.kalman_kernel",
    "category": "Function",
    "text": "kalman_kernel(s, x, P, t, Y, SSM) -> t, x, P, Ppred, ll, K\n\nSingle Kalman filter step consisting of a prediction step predict!, an observation step observe! and a correction step correct!. Return filtered covariance P and predicted Ppred\n\nComputes and returns as well the log likelihood of the residual and the Kalman gain.\n\n\n\n"
},

{
    "location": "library.html#Filtering-1",
    "page": "Library",
    "title": "Filtering",
    "category": "section",
    "text": "Kalman.kalmanfilter\nKalman.observe!\nKalman.predict!\nKalman.correct!\nKalman.evolve\nKalman.kalman_kernel"
},

{
    "location": "library.html#Kalman.kalmanrts",
    "page": "Library",
    "title": "Kalman.kalmanrts",
    "category": "Function",
    "text": "xxs, PP, PPpred, ll = kalmanrts(yy, xxs, M::LinearHomogSystem)\n\nRauch-Tung-Striebel smoother\n\nyy -- d₂xn array or \nxxs -- empty dxn array or view\nM --  linear dynamic system and observation model\n\nxxs -- smoothed process\nPP -- smoother variance\nPPpred -- smoother prediction\nll -- filter likelihood\n\n\n\nX = kalmanrts{T}(Y::Array{T,3}, M::LinearHomogSystem)\n\nStack Rauch-Tung-Striebel smoother, computes the marginal smoothed states, that is it computes the law p(x_i  y_1n).\n\nY -- m independent processes (d₂xnxm array)\n\nX -- smoothed processes (dxnxm array)\n\n\n\n"
},

{
    "location": "library.html#Smoothing-1",
    "page": "Library",
    "title": "Smoothing",
    "category": "section",
    "text": "Kalman.kalmanrts"
},

{
    "location": "library.html#Iterators-1",
    "page": "Library",
    "title": "Iterators",
    "category": "section",
    "text": "Kalman.KalmanFilter\nKalman.TimedKalmanFilter"
},

{
    "location": "library.html#Kalman.track",
    "page": "Library",
    "title": "Kalman.track",
    "category": "Function",
    "text": "track(A::Matrix{Float64}, p, h = 10) -> p2, err\n\nTrack blurry lightsource by applying a window with half-width h at  an approximate location p = (i,j) and find the average weighted location of points with high light intensity. \n\nGives an standard error estimate.\n\n\n\n"
},

{
    "location": "library.html#Tracking-1",
    "page": "Library",
    "title": "Tracking",
    "category": "section",
    "text": "Kalman.track"
},

]}
