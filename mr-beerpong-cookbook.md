# Mixed Reality Beer Pong - Unity Development Cookbook

**Author:** Niloufar Moradijam  
**Student ID:** s2410629015

---

## Project Overview

This cookbook documents the creation of a **Mixed Reality Beer Pong** game for Meta Quest 2/3 using Unity. The application leverages **Passthrough** technology to overlay virtual game elements onto the player's real environment. Players can select a real table in their room, and the game will spawn a cup rack and ball, enabling an immersive beer pong experience using hand tracking.

### Core Features
* **Passthrough Mixed Reality:** Virtual cups and ball are overlaid onto the real world
* **Scene Understanding:** Automatic detection of real-world tables and surfaces
* **Hand Tracking:** Grab and throw the ball using natural hand gestures
* **Dynamic Re-Racking:** Cups automatically rearrange when hit
* **Physics-Based Gameplay:** Realistic ball bouncing and throwing mechanics
* **Spatial Audio:** Immersive sound effects for bounces, splashes, and victory

---

## Phase 1: Prerequisites & Environment Setup

*Before starting Unity, the development environment and hardware must be prepared.*

### 1. Meta Developer Account
1. Log into [developers.meta.com](https://developers.meta.com)
2. Verify the account (via 2FA/Authenticator App) and create a "Team Name"

### 2. Meta Quest Link App (PC)
1. Install the Meta Quest Link app
2. **Settings:** Enable "Unknown Sources"
3. **Beta Settings:** Enable **Developer Runtime Features** and **Passthrough over Meta Quest Link**
4. *Troubleshooting:* Verify that the OpenXR runtime is active and set to Oculus

<!-- IMAGE: image2.png - Meta Quest Link Settings showing Developer Runtime Features and Passthrough enabled -->
<img width="1920" alt="image2" src="https://github.com/user-attachments/assets/0ca9aaee-6bb6-4d5d-aff3-720cc5f3c3a1" />

---

## Phase 2: Unity Project Initialization

*Setting up the base Unity environment for XR development.*

### 1. Project Creation
Create a new Unity project using the **3D URP (Universal Render Pipeline)** template to ensure high-quality graphics and performance suitable for VR/MR.

### 2. SDK Installation
Open the Unity Asset Store (or Package Manager) and install the following essential packages:
* **Meta XR Core SDK:** For basic camera and headset tracking
* **Meta XR Interaction SDK:** For hand tracking and gesture detection
* **Meta XR Interaction SDK OVR Integration:** Bridges the Interaction SDK with the Core SDK

<!-- IMAGE: image3.png - Unity Package Manager showing installed Meta XR packages -->
<img width="1920" alt="image3" src="https://github.com/user-attachments/assets/6756fe8c-4ad1-480c-a4cc-21a68b370c2f" />


---

## Phase 3: XR Configuration

*Configuring Unity to communicate with the headset.*

### 1. XR Plugin Management
1. Navigate to **Project Settings > XR Plugin Management**
2. Install the XR Plugin Management package
3. Under the PC tab (and Android tab for standalone builds), select the **Oculus** checkbox

### 2. Scene Setup
1. Delete the default "Main Camera" from the scene
2. Search for the **OVRCameraRig** prefab in the project files (ensure the "All" filter is active)
3. Drag **OVRCameraRig** into the scene. This replaces the standard camera and handles head tracking automatically

<!-- IMAGE: image4.png - OVRCameraRig in scene hierarchy -->
<img width="1920" alt="image4" src="https://github.com/user-attachments/assets/be1cd4d8-5cbb-4a12-850f-cfb50e19c722" />


---

## Phase 4: Implementing Hand Tracking

*Enabling the user to interact with the virtual world using their real hands.*

### 1. Hand Prefab Setup
1. Locate the **OVRHandPrefab**
2. Instantiate two copies: one for the Left Hand and one for the Right Hand
3. Parent them under **OVRCameraRig > TrackingSpace > LeftHandAnchor** (and RightHandAnchor respectively)

### 2. Component Configuration
* On both hand prefabs, disable all components *except* the first two (typically the script and the skeleton) to clean up behavior
* **Physics:** Enable **Physics Capsules** on the hands to allow them to touch and push objects
* **Hand Type:** Explicitly set the "Hand Type" to *Left* for the left hand and *Right* for the right hand

### 3. Interaction Setup
1. Add a **Hand Grab Interactor** component to the hands (specifically under OVRHands > Left Hand > HandInteractorsLeft in the hierarchy)
2. Add test objects (Cubes) to the scene and attach the following components to make them interactable:
   * Rigidbody (for physics)
   * Grabbable (from Interaction SDK)
   * Hand Grab Interactable

<!-- IMAGE: image5.png - Hand tracking setup with interactable objects -->
<img width="1920" alt="image5" src="https://github.com/user-attachments/assets/2040e983-1d89-4d0f-b955-690335fa2c0e" />


---

## Phase 5: Enabling Passthrough (Mixed Reality)

*Configuring the camera to show the real world as the background.*

### 1. OVR Manager Settings
1. Select the OVRCameraRig root object
2. In the **OVR Manager** component (under "Quest Features" > "General"):
   * Set **Passthrough Capability** to **Required**
   * Check **Enable Passthrough**

### 2. Passthrough Layer
1. Add the **OVRPassthroughLayer** script to the OVRCameraRig
2. **Projection Surface:** Set to **Reconstructed** (for full environment mapping)
3. **Placement:** Set to **Underlay** (renders passthrough behind virtual objects)

### 3. Camera Transparency
1. Select the **CenterEyeAnchor** (the main camera component)
2. Change **Clear Flags** (Background Type) to **Solid Color**
3. Set the **Background Color** to **Black (0,0,0)** with **Alpha set to 0**. This transparency allows the "Underlay" passthrough to be visible

---

## Phase 6: Scene Understanding & Room Detection

*Enabling the application to recognize and interact with real-world geometry (tables, walls, floors).*

### 1. MR Utility Kit (MRUK) Setup

The Meta MR Utility Kit replaces the deprecated OVR Scene Manager and provides modern scene understanding capabilities.

#### Add MRUK to Scene:
1. Create a new **Empty GameObject** named `MRUKManager`
2. Add the **MRUK** component (from Meta XR SDK)
3. In MRUK Inspector settings:
   * ✅ Check **"Load Scene On Startup"**
   * Set **Scene API** settings to automatically load room data

<!-- IMAGE: image6.png - MRUK component configuration -->
<img width="1920" alt="image6" src="https://github.com/user-attachments/assets/3daf5411-1a9a-4efd-acfb-92f85838d403" />


#### Configure OVRManager for Scene Support:
1. Select **OVRCameraRig** in Hierarchy
2. In the **OVR Manager** component:
   * Set **Anchor Support** to **Enabled**
   * Set **Scene Support** to **Required** (not just "Supported")

> **Critical Note:** MRUK loads room geometry from the Quest's Space Setup but does NOT automatically add colliders - this must be done programmatically.

### 2. Room Scanning Prerequisites

Before the app can detect surfaces, the physical space must be scanned in the headset.

#### In-Headset Setup:
1. Put on Meta Quest headset
2. Navigate to: **Settings > Physical Space > Space Setup**
3. Perform a **detailed room scan**:
   * Walk around the room slowly
   * Point cameras at all surfaces (walls, floor, ceiling)
   * **Explicitly mark tables/desks** when prompted
4. Save the space setup

The scanned data is stored on the device and will be accessible to Unity apps with proper permissions.

---

## Phase 7: Automatic Collider Generation for Scene Geometry

*Since MRUK loads room geometry without colliders, we need to programmatically add them for raycasting.*

### 1. ForceSceneLoad Script

Create a script to automatically add colliders to all detected room surfaces.

**Script Location:** `Assets/Scripts/ForceSceneLoad.cs`

#### Key Features:
* **Event-Driven:** Listens to `RoomCreatedEvent` and `RoomUpdatedEvent` from MRUK
* **Automatic Collider Addition:** Adds BoxCollider to all plane surfaces (tables, walls, desks)
* **Debug Visualization:** Optionally creates visible cubes to show detected surfaces
* **Mesh Fallback:** Uses MeshCollider if PlaneRect data is unavailable

#### Implementation Details:

```csharp
// Subscribe to MRUK room events
MRUK.Instance.RoomCreatedEvent.AddListener(OnRoomCreated);
MRUK.Instance.RoomUpdatedEvent.AddListener(OnRoomUpdated);
```

**For each detected anchor (surface):**
1. Check if it has a PlaneRect (2D surface data)
2. Add a BoxCollider with dimensions matching the surface
3. Optionally create a thin Cube primitive for visual debugging
4. Set the GameObject layer to ensure raycast compatibility

#### Critical Implementation Note:
* The script uses **thin BoxColliders** (0.01 units thick) for flat surfaces
* Each surface is parented to its anchor, ensuring tracking stability
* Visual debug cubes use `PrimitiveType.Cube` (visible from all sides) instead of Quad (single-sided)

### 2. Setup Instructions

1. Create **Empty GameObject** named `SceneForcer` (or `DebugHelper`)
2. Attach **ForceSceneLoad.cs** script
3. *(Optional)* Create a bright colored material (e.g., green/cyan) for debugging
4. Assign debug material to the script's `debugMaterial` field

### 3. Testing & Verification

#### Console Logs to Verify:
```
Room created: Room_[ID] - Adding colliders...
Processing 15 anchors in room
Processing: TABLE | Label: TABLE
✓ Added BoxCollider | Size: (1.2, 0.8)
✓ Added visual debug cube
*** TABLE/DESK READY | Position: (-1.96, -0.41, -0.65)
```

#### In VR Verification:
* If debug material is assigned: **Colored overlays** appear on all detected geometry
* Surfaces should align with real-world tables, walls, and desks

<!-- IMAGE: image7.png - Debug visualization showing detected room surfaces -->
<img width="1920" alt="image7" src="https://github.com/user-attachments/assets/9e8254b5-f07e-4206-b4b8-acc7cd95e07c" />


---

## Phase 8: Game Logic - Cup Rack Management

*Creating a system to manage beer pong cup formations programmatically.*

### Cup Prefab Preparation
1. Create a `RedCupPrefab` from the imported 3D model
2. **Adjustment:** Apply a default rotation of **(-90, 0, 0)** to correct the model's orientation
3. Add a collider to ensure physical interactions with balls

<!-- IMAGE: image8.png - Red cup prefab setup -->
<img width="1920" alt="image8" src="https://github.com/user-attachments/assets/70d975c8-b66c-4ab7-bbef-fc38a335fb84" />


### Cup Rack Manager Script

Create `CupRackManager.cs` to handle spawning and arranging cups.

**Logic:** Use a `Dictionary<int, List<Vector3>>` to store precise local positions for different cup counts (1, 2, 3, 4, 5, 6).

**Geometry:**
* Standard layouts (Pyramid, Diamond) calculated using equilateral triangle math
* **Custom Fix:** Added a specific "Trapezoid" layout (2 front, 3 back) for the 5-cup state

### Debugging
* Add a slider (`TestCupCount`) in the Inspector
* Allows real-time toggling between formations during Play Mode to verify spacing and rotation

<!-- IMAGE: image9.png and image10.png - Cup formations showing different arrangements -->
<img width="1367" alt="image9" src="https://github.com/user-attachments/assets/30efa56c-64de-4519-94c5-bf465a9e88dd" />

<img width="1385" alt="image10" src="https://github.com/user-attachments/assets/47dc0363-312f-4878-b53d-cc51d030b6ee" />


---

## Phase 9: Game Setup & Object Placement

*Implementing the logic to detect a real-world table and correctly position game elements (cups and ball) on it.*

### Game Manager Setup

Create `BeerPongSetup.cs` to manage the game state.

**Logic:** Instead of automatically starting, the script waits for a specific MRUKAnchor (the table) to be selected by the player.

**Placement Math:**
* Calculates the table's "Long Axis" to determine the gameplay direction
* Positions the **Cup Rack** at the far end (Enemy Side) and the **Ball** at the near end (Player Side)
* **Vertical Offset:** Add a small Z-offset (e.g., `0.07f`) to the Cup Rack to ensure cups sit *on* the table surface rather than clipping through it

### Rotation Fix (Crucial)

**Issue:** The cups initially appeared lying flat because the Rack aligned its "Up" (Y) with the Table's "Side" (Y).

**Solution:** Apply a specific local rotation to the Cup Rack when spawning:
```csharp
rack.transform.localRotation = Quaternion.Euler(0, 90, 90);
```
This ensures cups stand upright.

### Table Selection (Hand Tracking)

Implement a "Pinch to Select" workflow using `TableSelector.cs`.

**Hand Tracking Integration:**
* Use `OVRHand` to detect the **Index Finger Pinch** gesture instead of controller buttons
* Cast a ray from the user's hand to detected room objects (tables/desks)

**Visual Feedback:** The table highlights (changes material) when the user looks at it, confirming it is interactable.

**Interaction:** Pinching while looking at a table triggers `InitializeGameOnTable()`, spawning the rack and ball instantly on that specific surface.

<!-- IMAGE: image11.png - Table selection with hand tracking -->
<img width="1920" alt="image11" src="https://github.com/user-attachments/assets/acd34def-f392-4da2-9508-a2a7334b19e9" />


---

## Phase 10: Ball Physics & Interaction (Simplified)

*Configuring the ball to have realistic bouncing physics and making it grabbable using standard Meta Interaction SDK components.*

### Physics Setup
1. Create a **Physic Material** named `PingPongPhysics` with high bounciness (0.75) and assign it to the Ball's Collider
2. **Rigidbody:** Set Collision Detection to **Continuous Dynamic** to prevent the ball from clipping through the table during fast movements
3. **Collider:** Adjust the **Sphere Collider Radius** (increased to ~0.06) to make the "grab zone" slightly larger than the visual ball

### Grabbable Implementation

Remove custom scripts and rely on stable SDK components:

* **Grabbable:** The core component that marks the object as interactive
* **One Grab Free Transformer:**
  * **Crucial Step:** Assign this transformer to the Grabbable component
  * *Function:* Allows the ball to be moved freely in 3D space when held
* **Hand Grab Interactable:**
  * Enables specific Hand Tracking interaction
  * **Hand Alignment:** Set to **None** (instead of "Align on Grab") to create a "magnetic" feel
* **Physics Grabbable:**
  * Link to the Grabbable component
  * *Function:* Ensures that when the user releases/throws the ball, the velocity of the hand is transferred to the ball's Rigidbody

<!-- IMAGE: image12.png - Ball physics and grabbable component setup -->
<img width="1920" alt="image12" src="https://github.com/user-attachments/assets/a536298f-2614-4bd0-962c-2ea8917e88cc" />


---

## Phase 11: Refining Throwing Mechanics

*Optimizing the hand interaction to ensure accurate throwing momentum.*

### 1. Hand Velocity Configuration

**Objective:** Ensure throws feel natural and carry the correct momentum.

**Setup Steps:**
1. Locate the **HandVelocityCalculator** object in the hierarchy (under OVRInteraction > OVRHands > Left/RightInteractions)
2. Verify it uses the **Standard Velocity Calculator** script
3. Select the **Hand Grab Interactor** component on the Hand Prefabs
4. Drag the `HandVelocityCalculator` into the **Velocity Calculator** field

**Result:** The system accurately calculates the release speed based on the hand's movement history, allowing for functional throwing arcs.

<!-- IMAGE: image13.png - Hand velocity calculator setup -->
<img width="1920" alt="image13" src="https://github.com/user-attachments/assets/a9beb8d3-83ba-4305-b555-aada89f70df1" />


### 2. Ball Stabilization (The "Invisible Corral")

**Issue:** The ball would immediately roll away upon spawning due to slight tilts in the scanned table mesh or physics jitter.

**Solution:** Implement a physical **"Corral"** (a small box with no lid) to physically block the ball from rolling.

**Prefab Creation (BallCorral):**
1. Create an empty parent object named `BallCorral`
2. Add 4 child Cubes to form walls (Front, Back, Left, Right) sized approx. **12cm x 10cm**
3. **Invisibility:** Disable the **Mesh Renderer** on all walls so they are invisible but still function as physical colliders

**Game Manager Integration:**
* Update `BeerPongSetup.cs` to accept a `ballCorralPrefab`
* Spawn Logic: When spawning the ball, instantiate the Corral at the exact same position (slightly offset downwards)

**Outcome:** The ball tries to roll but hits the invisible walls and stops. The player simply reaches into the open top to grab the ball.

<!-- IMAGE: image14.png - Ball corral setup -->
<img width="1920" alt="image14" src="https://github.com/user-attachments/assets/44b269fb-4b64-492d-b219-2bf9ea1d5600" />


---

## Phase 12: Physics Refinement (Bounciness)

*Configuring the physics engine to ensure the ball bounces lively on table surfaces.*

### 1. Creating the Physics Material

**Objective:** Standard Unity colliders have zero bounciness by default. A custom **Physic Material** is required.

Create a new Physic Material named `PingPongPhysics`.

### 2. Configuration Settings

* **Friction:** Set **Dynamic Friction** and **Static Friction** to **0.4**
* **Bounciness:** Set to **0.75** (High) to simulate a light plastic ball
* **The Critical Fix (Bounce Combine):**
  * **Issue:** Initially, the ball would not bounce even with high bounciness settings
  * **Solution:** Change **Bounce Combine** to **Maximum**
  * *Logic:* Forces Unity to use the *highest* bounciness value involved in the collision

### 3. Assignment
1. Select the **Ball Prefab**
2. Locate the **Sphere Collider** component
3. Assign the `PingPongPhysics` material to the **Material** slot

<!-- IMAGE: image15.png and image16.png - Physics material settings -->
<img width="1920" alt="image15" src="https://github.com/user-attachments/assets/5a5aa8d7-6590-482c-a2ed-1d99a99736db" />

<img width="1920" alt="image16" src="https://github.com/user-attachments/assets/e4370376-7062-4360-a213-1bbde22121fd" />


---

## Phase 13: Game Loop Closure (Boundaries & Respawns)

*Implementing a system to automatically reset the ball when it goes out of play or hits the floor.*

### 1. Ball Reset Logic (BallGameMechanics.cs)

Create a script attached to the **Ball Prefab**.

**Logic:**
* Store the initial spawn position (`StartPos`)
* **Reset Routine:** Temporarily disable physics (`isKinematic = true`), reset velocity to zero, teleport back to `StartPos`, re-enable physics after a short delay (0.2s)
* **Floor Detection:** Add an `OnCollisionEnter` check to detect if the ball hits the floor (Y < -0.1f)

### 2. Boundary Triggers (BoundaryWall.cs)

Create a script for invisible walls.

**Logic:** Use `OnTriggerEnter` to detect if the Ball passes through the wall, then call `ResetBall()`.

### 3. Procedural Boundary Generation

Since the table size changes with every room scan, the game must generate walls that fit the specific table.

**Game Manager Update (BeerPongSetup.cs):**
* Add a `SpawnBoundaries` function
* **Calculation:** Identify the table's "Long Axis" and "Short Axis"
* **Placement:** Automatically spawn 3 invisible walls:
  * **Far Wall:** Behind the cups
  * **Left & Right Walls:** Along the table sides
  * **Player Side:** Left open for throwing
* **Invisibility:** Spawn Cubes but immediately destroy their MeshRenderer, leaving only BoxCollider (Trigger)

**Outcome:**
* If the player throws the ball and misses the table, it hits the invisible boundary and instantly resets
* If the ball falls off the table and hits the floor, it resets
* The gameplay loop is now closed; the player never loses the ball

<!-- IMAGE: image17.png - Boundary system visualization -->
<img width="1920" alt="image17" src="https://github.com/user-attachments/assets/97a2f519-dd97-4ffc-ac8e-938868c8f048" />


---

## Phase 14: Scoring & Game Logic (Re-Racking)

*Implementing the core rules: detecting when a ball lands in a cup, removing that cup, and restructuring the remaining rack.*

### 1. The "Liquid Sensor" Strategy

**Objective:** Detect if the ball landed *inside* the cup without colliding with the outer walls.

**Prefab Modification (Cup):**
1. Open the **SingleCup Prefab**
2. Create a child object named `WaterSensor`
3. **Collider:** Add a **Cylinder Collider** sized to fit snugly inside the cup
4. **Trigger:** Check **Is Trigger** ✅
5. **Script:** Attach `CupSensor.cs`

<!-- IMAGE: image18.png and image19.png - Cup sensor setup -->
<img width="1920" alt="image18" src="https://github.com/user-attachments/assets/2973d7d0-c258-4faa-a358-1234ede36af3" />

<img width="1920" alt="image19" src="https://github.com/user-attachments/assets/01e8f433-f27a-49d1-968f-6497416e1694" />


### 2. Scoring Logic (CupSensor.cs)

**Function:** Acts as the bridge between the physical interaction and the game manager.

**Logic:**
1. Listen for `OnTriggerEnter`
2. Check if the object is the Ball (by looking for `BallGameMechanics` component)
3. If confirmed:
   * Call `ResetBall()` on the ball
   * Call `OnCupHit()` on the parent `CupRackManager`

### 3. Rack Management Updates (CupRackManager.cs)

**Implementation:**
* Add the `OnCupHit()` function
* **State Update:** Decrement `currentCupCount` (e.g., 6 -> 5)
* **Win Condition:** Check if count reaches 0 to log "Game Over/Win"
* **Re-Rack System:** Immediately call `SetupRack(newCount)` to spawn the fresh formation

**Outcome:**
Player throws ball → Ball enters cup → Sensor triggers → Cup count drops → Rack instantly reshuffles → Ball returns to player

---

## Phase 15: User Interface, Scoring & Game Loop Closure

*Implementing a world-space UI to visualize progress and creating a victory state.*

### 1. The Scoreboard System (ScoreBoard.cs)

**Singleton Pattern:** Implement `public static ScoreBoard Instance` for global access.

**UI Logic:**
* `AddHit()` / `AddMiss()`: Updates the 3D text immediately
* **Win State (`ShowWinMessage`):** Hides the "Misses" text and changes the "Hits" text to a large, yellow **"Congratulations! You Win!"** message

### 2. Visual Setup (World Space Canvas)

1. Create a Unity **Canvas** set to **World Space** render mode
2. **Scaling:** Scale to **0.001** to fit the VR environment
3. **Elements:** Add two **TextMeshPro** components (Green for "HITS", Red for "MISSES")
4. **Spawning:** Update `BeerPongSetup.cs` to instantiate the scoreboard **25cm behind** the cup rack, using `LookAt()` to ensure it faces the player

<!-- IMAGE: image20.png - Scoreboard UI setup -->
<img width="1920" alt="image20" src="https://github.com/user-attachments/assets/f9210e4c-d573-4042-87d7-410b23ff48db" />


### 3. Logic Integration (The "Goal" Flag)

**Ball Mechanics:** Modify `ResetBall()` to accept a boolean flag (`isGoal`):
* *Default:* If no flag is passed (hitting floor/wall), counts as a **Miss**
* *Goal:* If `true` is passed, skips the miss counter

**Race Condition Fix:**
* **Issue:** "Win" message would be overwritten by the score update
* **Fix:** In `CupSensor.cs`, call `ScoreBoard.AddHit()` **before** notifying `CupRackManager`

### 4. Victory Condition (CupRackManager.cs)

**Logic:** Check if `currentCupCount` reaches **0**.

**End Game Sequence:**
1. **UI:** Call `ScoreBoard.Instance.ShowWinMessage()`
2. **Cleanup:** Find and **Destroy** the ball immediately
3. **Stop:** Return early to prevent building an empty rack

<!-- IMAGE: image21.png and image22.png - Game in progress and victory screen -->
<img width="1920" alt="image21" src="https://github.com/user-attachments/assets/91d8a87c-7fa0-4ac1-9ad4-f982a94116e1" />

<img width="1920" alt="image22" src="https://github.com/user-attachments/assets/11cd083a-fa42-46c7-b1bf-9af68215f7fc" />


---

## Phase 16: Audio Implementation (SFX & Music)

*Adding immersive audio feedback to the game loop.*

### 1. The Audio Manager (GameAudioManager.cs)

**Singleton Implementation:**

**Properties:** Add public AudioClip slots for:
* BackgroundMusic
* GameStart
* Bounce
* Miss
* Score
* Win

**Background Music:** Automatically initialize an Audio Source on `Start()` to loop at low volume (0.3).

**Helper Function:** Create `PlaySound(clip, position)` using `AudioSource.PlayClipAtPoint` for 3D spatial sounds.

### 2. Integration Points

**Ball Mechanics (BallGameMechanics.cs):**
* **Bounce:** Play `bounceClip` in `OnCollisionEnter` if hitting a non-floor object with sufficient velocity
* **Miss:** Play `missClip` in `ResetBall()` if caused by floor or boundary

**Scoring (CupSensor.cs):**
* **Goal:** Play `scoreClip` (Water Splash) when ball enters cup

**Game Loop (BeerPongSetup.cs & CupRackManager.cs):**
* **Start:** Play `gameStartClip` when table is selected
* **Win:** Play `winClip` (Fanfare) when final cup is removed

<!-- IMAGE: image23.png - Audio manager setup -->
<img width="1920" alt="image23" src="https://github.com/user-attachments/assets/5cd88e01-71f8-4e3b-8ee0-dd2d4913a144" />

---

## Phase 17: Build & Deployment

*Compiling the project into a standalone Android package (.apk) for the Meta Quest.*

### 1. Build Settings Configuration

1. Go to **File > Build Settings**
2. **Platform:** Ensure **Android** is selected
3. **Texture Compression:** Set to **ASTC** (Standard for Quest)
4. **Run Device:** Select your headset or leave as Default Device
5. **Scenes in Build:** Click **"Add Open Scenes"**

### 2. Player Settings

1. Click **Player Settings...** button
2. **Company Name:** Set your name (e.g., *NiliDev*)
3. **Product Name:** Set to *MR Beer Pong*
4. **Version:** Set to *1.0*

### 3. Critical Android Settings

Navigate to **Player > Other Settings**:

* **Color Space:** Set to **Linear** (Required for URP/Passthrough)
* **Graphics APIs:** Auto Graphics API (OpenGLES3 or Vulkan)
* **Minimum API Level:** Set to **Android 10.0 (API level 29)** or higher
* **Target API Level:** Set to **Automatic (Highest installed)**
* **Scripting Backend:** Set to **IL2CPP** (Required for Store/Performance)
* **Target Architectures:** Check **ARM64**

<!-- IMAGE: image24.png and image25.png - Build settings -->
<img width="1920" alt="image24" src="https://github.com/user-attachments/assets/462bfb68-9d34-4f91-8135-e2e0d24867a7" />

<img width="1920" alt="image25" src="https://github.com/user-attachments/assets/1858fd3b-2b7f-4cce-8e7a-d0249b4aa6ac" />

### 4. Building the APK

1. Close Player Settings and return to **Build Settings**
2. Click **Build**
3. Create a folder named "Builds" and name your file `BeerPong_v1.apk`
4. Wait for Unity to compile (5-10 minutes for first build)

<!-- IMAGE: image26.png - Build process -->
<img width="1920" alt="image26" src="https://github.com/user-attachments/assets/5bdafb0f-5fda-4b1d-a603-4a13a0b466ef" />

### 5. Deployment (Installing to Headset)

1. Open **Meta Quest Developer Hub (MQDH)** or **SideQuest**
2. Drag and drop the generated `.apk` file to install
3. **In Headset:** Go to **App Library > Search Bar > Filter > Unknown Sources**
4. Select *MR Beer Pong* to launch!

---

## Resources & Downloads

**Source Code:** [GitHub Repository](https://github.com/niloufarmj/SC-CupPong)

**APK Build:** [Google Drive Download](https://drive.google.com/file/d/1lArDQ0j9t6MGJCRhDdklQ_t4mYPbPPbl/view?usp=sharing)

---

## Video Showcase

https://github.com/user-attachments/assets/2702f71b-446f-45e8-9e6e-5bdf790551dc



---

## Troubleshooting

### Headset Not Detected in Unity
* Make sure Meta Horizon Link is set as the active runtime in the PC app
* Restart Unity, Meta Horizon Link, and the headset after enabling developer mode
* If using a cable, prefer a USB 3.0 port directly on the motherboard

### Passthrough Not Visible
* Verify that Passthrough Support is set to Supported or Required in OVRManager
* Check that the OVRPassthroughLayer Placement is set to Underlay
* Ensure the Skybox Material is set to None in Lighting settings
* Confirm that Passthrough via Meta Horizon Link is enabled in the PC app

### Ball Not Bouncing
* Ensure the Physics Material has Bounce Combine set to Maximum
* Verify the ball has a Rigidbody with Collision Detection set to Continuous Dynamic
* Check that the table surface has a collider

### Hand Tracking Issues
* Ensure good lighting conditions
* Verify hands are within the tracking volume
* Check that Hand Tracking is enabled in Quest settings

### Cups Not Detecting Ball
* Confirm the water sensor has Is Trigger checked
* Verify the ball has the BallGameMechanics component
* Check collider sizes and positions