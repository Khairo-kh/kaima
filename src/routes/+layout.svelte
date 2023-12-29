<script>
	import '../app.css';
	export let data;
</script>

<div class="min-h-full">
	<nav class="navbar bg-base-100 border-b">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl"> Kaima </a>
		</div>
		<div class="flex-none">
			{#if !data.user}
				<div class="dropdown dropdown-end">
					<a href="/login" class="btn btn-outline"> Login </a>
					<a href="/register" class="btn btn-outline"> Register </a>
				</div>
			{:else}
				<div class="dropdown dropdown-end mr-4">
					<a href="/" class="btn btn-primary btn-outline">Add list</a>
				</div>
				<div class="dropdown dropdown-end">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<label tabindex="0" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full">
							<img src="https://placeimg.com/80/80/people" alt="avatar" />
						</div>
					</label>

					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a href="/my/lists" class="justify-between">My Lists</a>
						</li>
						<li>
							<a href="/my/settings" class="justify-between">My Lists</a>
						</li>
						<li>
							<form action="/logout" method="POST">
								<button type="submit" class="w-full text-start"></button>
							</form>
						</li>
					</ul>
				</div>
			{/if}
		</div>
	</nav>
	<div class="py-10">
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<slot />
		</div>
	</div>
</div>
